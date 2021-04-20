import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Images from "./Components/Images";
import "./App.css";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/images">
          <Images />
        </Route>

        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
