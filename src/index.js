//React
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//React Router (v6)
import { BrowserRouter as Router } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import App from "./App";

//CSS Styles
import "./styles/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
