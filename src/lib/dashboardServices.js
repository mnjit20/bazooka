import axios from "axios";

export const getCreatorsList = () => {
  console.log("fetch api loader called");
  return (
    axios
      .get("/creators/list/", { crossdomain: true })
      // .then(res => {
      //   // console.log(res.data);
      //   res.data;
      // })
      .catch(e => console.log(e))
  );
};

export const getStatesList = () => {
  console.log("FETCH API FOR STATES");
  return (
    axios
      .get("/states/all/", { crossdomain: true })
      // .then(res => {
      //   console.log("======", res.data);
      // })
      .catch(e => console.log(e))
  );
};
