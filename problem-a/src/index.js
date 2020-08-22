import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import {App} from './App';
import senatorsList from "./senators.json";

let senList = senatorsList;
ReactDOM.render(<App senators={senList}/>, document.getElementById('root'));