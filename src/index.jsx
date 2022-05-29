import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Greeting from "./Greeting.jsx";

const rootElem = document.querySelector("#root");

const person = {
  firstName: "Michael",
  lastName: "Valiahmetov",
  birthDate: new Date("1963-04-16"),
};

ReactDOM.render(
  <Greeting
    firstName={person.firstName}
    lastName={person.lastName}
    birthDate={person.birthDate}
  />,
  rootElem
);
