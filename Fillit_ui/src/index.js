import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import dataStore from "./dataStore";
import {positions,transitions,Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options={
  timeout:5000,
  positons:positions.BOTTOM_CANTER,
  transitions:transitions.SCALE,
}

ReactDOM.render(
  <Provider store={dataStore}>
    <AlertProvider template={AlertTemplate}{...options}>
    <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);

