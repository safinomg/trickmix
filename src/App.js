import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './page/Home/home'
import About from './page/About/about'
import Games from './page/Games/games'
import Header from './ui/Header'

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}