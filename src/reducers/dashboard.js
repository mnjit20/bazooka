//import axios from "axios";

import { getCreatorsList, getStatesList } from "../lib/dashboardServices";

//console.log("getCreatorsList bb", getCreatorsList, getStatesList);

const initState = {
  creators: [],
  states: [],
  socialPlatformFilter: {
    youtube: false,
    facebook: false,
    instagram: false,
    isSocialCustomFilterApplied: false
  },
};

export const fetchCreators = () => {
  console.log("Reducer Function ===== fetchCreators");
  return dispatch => {
    getCreatorsList().then(creator =>
      dispatch(loadCreators(creator.data.creator))
    );
  };
};

export const fetchStates = () => {
  console.log("Reducer Function ===== fetchStates");
  return dispatch => {
    getStatesList().then(states => dispatch(loadStates(states.data.category)))
  };
};

export const handleSocialFilterRHS = (event) => {
  console.log("Reducer Function ===== social filter rhs", event);
  return dispatch => {
    dispatch(getSocialFilterRHS(event));
  };
};



const CREATORS_LOAD = "CREATORS_LOAD";
const STATES_LOAD = "STATES_LOAD";
const LOAD_DASHBOARD = "LOAD_DASHBOARD";
const FILTER_USING_SOCIAL_BUTTONS = "FILTER_USING_SOCIAL_BUTTONS";

export const loadCreators = creators => ({
  type: CREATORS_LOAD,
  payload: creators
});

export const loadStates = states => ({
  type: STATES_LOAD,
  payload: states
});

export const getSocialFilterRHS = socialPlatformFilter => ({
  type: FILTER_USING_SOCIAL_BUTTONS,
  payload: socialPlatformFilter
});



export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_DASHBOARD:
      return { ...state };
    case CREATORS_LOAD:
      return { ...state, creators: action.payload };
    case STATES_LOAD:
      return { ...state, states: action.payload };
    case FILTER_USING_SOCIAL_BUTTONS:
      return { ...state, socialPlatformFilter: action.payload };
    default:
      return state;
  }
};
