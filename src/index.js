// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { CartProvider } from "react-use-cart";
// import { Provider } from "react-redux";
// import appStore from "./constant/appStore";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <>
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <CartProvider>
//                     <App />
//                 </CartProvider>
//             </Provider>
//         </BrowserRouter>
//     </>
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Provider } from "react-redux";
import appStore from "./constant/appStore";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={appStore}>
                <CartProvider>
                    <App />
                </CartProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
