import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, createBrowserRouter , Route, RouterProvider, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </>
)
