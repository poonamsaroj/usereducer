import React from 'react';
import ReactDOM from 'react-dom/client';
import UseReducerState from './UseReducerState';
import UseReducerState1 from './UseReducerState1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <pre>============== USE REDUCER Example 1 ===============</pre>
    <UseReducerState />
    <pre>==========================================</pre> <br/>
    <pre>============== USE REDUCER Example 2 ===============</pre>
    <UseReducerState1 />
    <pre>==========================================</pre>
  </React.StrictMode>
);

