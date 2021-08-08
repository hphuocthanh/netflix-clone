import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./globalstyles";
import "normalize.css";
import { firebase } from "./lib/firebase";
import { FirebaseContext } from "./context/firebase"

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}></FirebaseContext.Provider>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals(console.log);
