import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import ReadNow from "./components/ReadNow";
import Register from "./components/Register";


class App extends React.Component {
  render() {
    return <div className="main-content">
      <BrowserRouter>

        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/readNow" component={ReadNow} />

      </BrowserRouter>
    </div>
  }

}
export default App;
