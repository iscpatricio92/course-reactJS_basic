import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UseEffectComponent from "./UseEffectComponent";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2>component useState</h2>
    <App />
    <hr />
    <h2>component useEffect</h2>
    <UseEffectComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
