import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./root/App";
import store from "./app/store";
import ScrollToTop from "./pages/helpers/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <ScrollToTop/>
      <App />
    </Provider>
  </BrowserRouter>
);
