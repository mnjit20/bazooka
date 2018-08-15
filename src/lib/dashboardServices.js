import axios from "axios";

// export const getCreatorsList = () => {
//   console.log("fetch api loader called");
//   return fetch("http://localhost:7000/creators/list/")
//     .then(res => res.json())
//     .catch(e => console.log(e));
// };

export const getCreatorsList = () => {
  console.log("fetch api loader called");
  return (
    axios
      .get("/creators/list/", { crossdomain: true })
      // .then(res => {
      //   //console.log(res.data);

      // })
      .catch(e => console.log(e))
  );
};
