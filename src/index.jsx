import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./index.scss";
import Greeting from "./Greeting";

const rootElem = document.querySelector("#root");

const person = {
  name: "Michael",
  birthDate: new Date("1963-04-16"),
};

console.log(moment(person.birthDate).fromNow().slice(0, 3));

const greetingElem = (props) => {
  return <Greeting person={props.person} />;
};

ReactDOM.render(greetingElem(person), rootElem);
