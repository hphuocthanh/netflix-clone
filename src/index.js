import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./globalstyles";
import "normalize.css";
import { firebase } from "./lib/firebase";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

reportWebVitals(console.log);
