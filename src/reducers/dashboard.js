//import axios from "axios";

import { getCreatorsList, getStatesList } from "../lib/dashboardServices";

//console.log("getCreatorsList bb", getCreatorsList, getStatesList);

const initState = {
  creators: [],
  states: []
};

export const fetchCreators = () => {
  console.log("===== fetchCreators");
  return dispatch => {
    getCreatorsList().then(creator =>
      dispatch(loadCreators(creator.data.creator))
    );
  };
};

export const fetchStates = () => {
  console.log("===== fetchStates");
  return dispatch => {
    getStatesList().then(states => dispatch(loadStates(states.data.category)));
  };
};

const CREATORS_LOAD = "CREATORS_LOAD";
const STATES_LOAD = "STATES_LOAD";
const LOAD_DASHBOARD = "LOAD_DASHBOARD";

export const loadCreators = creators => ({
  type: CREATORS_LOAD,
  payload: creators
});

export const loadStates = states => ({
  type: STATES_LOAD,
  payload: states
});

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_DASHBOARD:
      return { ...state };
    case CREATORS_LOAD:
      return { ...state, creators: action.payload };
    case STATES_LOAD:
      return { ...state, states: action.payload };
    default:
      return state;
  }
};
