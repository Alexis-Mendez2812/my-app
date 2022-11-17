import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store"
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Provider store={store}>

<React.StrictMode>

 <Auth0Provider
 domain="dev-8dlcilpo.us.auth0.com"
 clientId="plFjNwzqlkhThFN8M9lvhFwePMgOIjhI"
 redirectUri={window.location.origin}
 >

  <App />

    </Auth0Provider>
</React.StrictMode>
  </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
