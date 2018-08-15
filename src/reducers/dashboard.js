import axios from "axios";

import { getCreatorsList } from "../lib/dashboardServices";

console.log("getCreatorsList bb", getCreatorsList);

// async function getUser() {
//   try {
//     const response = await axios.get("http://localhost:7000/creators/list/");
//     console.log("response from axios", response);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

const initState = {
  creators: []
};

export const fetchCreators = () => {
  return dispatch => {
    getCreatorsList().then(creator =>
      dispatch(loadCreators(creator.data.creator))
    );
  };
};

const CREATORS_LOAD = "CREATORS_LOAD";

export const loadCreators = creators => ({
  type: CREATORS_LOAD,
  payload: creators
});

export default (state = initState, action) => {
  switch (action.type) {
    case "LOAD_DASHBOARD":
      return { ...state };
    case CREATORS_LOAD:
      return { ...state, creators: action.payload };
    default:
      return state;
  }
};
