import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/global.scss";
import "./styling/index.scss"
import Test from "./Test1.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
);
