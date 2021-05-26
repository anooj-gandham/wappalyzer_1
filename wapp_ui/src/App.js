// import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Signup from "./components/signup";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/signup" render={(props) => <Signup {...props} />} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
