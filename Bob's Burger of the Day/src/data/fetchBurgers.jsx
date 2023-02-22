import React from "react";
import axios from "axios";

// axios.get("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/").then ((response) => {
//   console.log(response)
// })

export const fetchBurgers = () => {
  axios
    .get("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/")
    .then((response) => {
      console.log(response);
    });
};
