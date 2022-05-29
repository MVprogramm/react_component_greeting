import React from 'react';
import './greeting.scss';
import moment from 'moment';

function Greeting(props) {
  return (
    <div className="greeting">
      My name is {props.name}. I'm 17 years old
    </div>
  );
}

export default Greeting;