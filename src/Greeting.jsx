import React from "react";
import "./greeting.scss";
import moment from "moment";

function Greeting(props) {
  return (
    <div className="greeting">
      My name is {props.person.firstName} {props.person.lastName}. I'm{" "}
      {moment(props.person.birthDate).fromNow().slice(0, 3)} years old
    </div>
  );
}

export default Greeting;
