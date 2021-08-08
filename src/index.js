import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./globalstyles";
import "normalize.css";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals(console.log);
