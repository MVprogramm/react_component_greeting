import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Greeting from "./Greeting";

const rootElem = document.querySelector("#root");

const person = {
  firstName: "Michael",
  lastName: "Valiahmetov",
  birthDate: new Date("1963-04-16"),
};

const greetingElem = (props) => {
  return <Greeting person={props.person} />;
};

ReactDOM.render(greetingElem(person), rootElem);
