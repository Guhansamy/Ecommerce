import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Parcard from './components/Parcard';
import { CartProvider } from 'react-use-cart';
import React from 'react';
import './index.css';
import Body from './components/Body';
import { BrowserRouter, createBrowserRouter , Route, RouterProvider, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Smartphone from './components/Smartphone';
import Laptops from './components/Laptops';
import Fragrance from './components/Fragrance';
import Groceries from './components/Grocieries';
import Skin from './components/Skin';
import Cart from './components/Cart';
import Carts_new from './components/Carts_new';

function App() {
      return (
        <div>

          {/* <Provider store={appStore} > */}
          {/* <CartProvider> */}
          <Header />
          <Routes>
        <Route path='/' element = {<Body />} />,
        <Route path='/Profile-page/' element = {<Profile />} />,
        <Route path='/item/:itemID' element = { <Parcard />} />,
        <Route path='/smart-phone/' element = { <Smartphone />} />,
        <Route path='/laptops/' element = { <Laptops />} /> ,
        <Route path='/fragrance/' element = { <Fragrance />} />,
        <Route path='/grocieries/' element = { <Groceries />} />,
        <Route path='/skin-care/' element = { <Skin />} />,
        <Route path='/cart/' element = { <Carts_new />} />

    </Routes>
          <Outlet />
          {/* </CartProvider> */}
          {/* </Provider> */}
        </div>
        
      );
}

// function AppWrapper {
//   return (
//     <Provider store={appStore}>
//       <App />
//     </Provider>
//   )
// }
export default App;

