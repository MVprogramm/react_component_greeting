import React from "react";
import "./greeting.scss";

function Greeting(props) {
  return (
    <div className="greeting">
      My name is {props.name}. I'm{" "}
      {moment(person.birthDate).fromNow().slice(0, 3)} years old
    </div>
  );
}

export default Greeting;
