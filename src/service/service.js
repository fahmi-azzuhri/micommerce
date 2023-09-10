import axios from "axios";

export const Service = (callback) => {
  axios
    .get(`${process.env.REACT_APP_CORE}/products`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
