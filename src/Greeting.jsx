import React from "react";
import "./greeting.scss";
import moment from "moment";

function Greeting(props) {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm{" "}
      {moment(props.birthDate).fromNow()} years old
    </div>
  );
}

export default Greeting;
