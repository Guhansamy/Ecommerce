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
import Smartphone from './components/Smartphone';
import Laptops from './components/Laptops';
import Fragrance from './components/Fragrance';
import Groceries from './components/Grocieries';
import Skin from './components/Skin';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <App />
    <Routes>
        <Route path='/' element = {<Body />} />,
        <Route path='/Profile-page/' element = {<Profile />} />,
        <Route path='/item/:itemID' element = { <Parcard />} />,
        <Route path='/smart-phone/' element = { <Smartphone />} />,
        <Route path='/laptops/' element = { <Laptops />} /> ,
        <Route path='/fragrance/' element = { <Fragrance />} />,
        <Route path='/grocieries/' element = { <Groceries />} />,
        <Route path='/skin-care/' element = { <Skin />} />,

    </Routes>
  </BrowserRouter>
)
