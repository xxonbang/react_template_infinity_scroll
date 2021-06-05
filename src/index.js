import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

// import Http from './services/http'
// import axios from 'axios';

// const httpClient = axios.create({
//   baseURL: 'http://localhost:3300/v1/chart/'
// });

// const http = new Http(httpClient);

ReactDOM.render(
  <React.StrictMode>
    {/* <App http={ http }/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);