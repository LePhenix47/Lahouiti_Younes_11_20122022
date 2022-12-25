//React
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
//CSS Styles
import "./styles/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route path="/test">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
