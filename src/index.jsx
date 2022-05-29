import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Greeting from './Greeting';

const rootElem = document.querySelector('#root');

const person = {
  name: 'Michael',
}

const greetingElem = (props) => {
  return (
    <Greeting person={props.person} />
  );
}

ReactDOM.render(greetingElem(person), rootElem);
