import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {router} from './router'
import boostrap from 'bootstrap/dist/css/bootstrap.css'
import { CartContextProvider } from './context/cartContext'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9OMSXzVTGWnPD6AF1vbPg_f4MJj0eU1w",
  authDomain: "ecommerce-bac28.firebaseapp.com",
  projectId: "ecommerce-bac28",
  storageBucket: "ecommerce-bac28.appspot.com",
  messagingSenderId: "384611751550",
  appId: "1:384611751550:web:e171af27f50dbf290e6a2f"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
