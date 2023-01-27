import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';
// Inicia aca

import {BrowserRouter} from "react-router-dom"; 
import store from "./store"; 
import {Provider} from "react-redux";
import axios from "axios";

/* axios.defaults.baseURL = 'http://localhost:3001'; */ // esto le avisa a axios que todas las peticiones que haga empiecen con este codigo. !!!! DESCOMENTAR ESTO CUANDO QUEREMOS TRABAJAR CON EL PROYECTO DE FORMA LOCAL Y COMENTAR LO DE ABAJO
/* axios.defaults.baseURL = 'https://pi-dogs-backend-978w.onrender.com'; */  
axios.defaults.baseURL = 'https://backend-dogs-production.up.railway.app';  

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
