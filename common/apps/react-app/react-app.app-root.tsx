import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactApp } from './react-app';

ReactDOM.render(
  <BrowserRouter>
    <ReactApp>hello world!</ReactApp>
  </BrowserRouter>,
  document.getElementById('root')
);
