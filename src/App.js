import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>This will be the signin page</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>This will be the signup page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>This will be the browse page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
