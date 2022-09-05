import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

import Home from "../pages/home/home";
import Login from "../pages/login/Login";


function RoutesMain() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route  path="/register">
        <Register />
      </Route>  
    </Switch>
  );
}

export default RoutesMain;
