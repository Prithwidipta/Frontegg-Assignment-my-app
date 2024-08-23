import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const contextOptions ={
  baseUrl: 'https://app-wffoq8z5ucnj.frontegg.com',
  clientId: '2bfe9e03-e8b5-4fd9-9c46-75fe15460b71', 
  appId: '43ddb38d-ea2d-46d3-87a1-7017272f55d7'
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider 
  contextOptions={contextOptions} 
  hostedLoginBox={true}>
      <App />
  </FronteggProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
