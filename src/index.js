import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Paths from './Containers/Paths';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);