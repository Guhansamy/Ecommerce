import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import Parcard from './components/Parcard';
import Body from './components/Body';
import { BrowserRouter, createBrowserRouter , Route, RouterProvider, Routes } from 'react-router-dom';
import Profile from './components/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <App />
    <Routes>
        <Route path='/' element = {<Body />} />,
        <Route path='/Profile-page/' element = {<Profile />} />,
        <Route path='/item/:itemID' element = { <Parcard />} />

    </Routes>
  </BrowserRouter>
)
