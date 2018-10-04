import axios from "axios";

export const getCreatorsList = () => {
  console.log("FETCH API FOR getCreatorsList");
  return axios
    .get("/creators/list/", { crossdomain: true })
    .catch(e => console.log(e));
};

export const getStatesList = () => {
  console.log("FETCH API FOR STATES getStatesList");
  return (
    axios
      .get("/states/all/", { crossdomain: true })
      .catch(e => console.log(e))
  );
};


export const handleSocialButtonClick = () => {
  console.log('social btn ');

}