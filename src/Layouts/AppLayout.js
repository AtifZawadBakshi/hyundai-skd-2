import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Auth/Login";
import Logout from "../Components/Auth/Logout";
import InwardCheck from "../Components/InwardCheck/InwardCheck";
import KitsInward from "../Components/KitsInward/KitsInward";
// var user = JSON.parse(localStorage.getItem("user"));
// let isLoggedIn = false;
// if (user != null) {
//   isLoggedIn = true;
// } else {
//   isLoggedIn = false;
// }

const isLoggedIn = true;

const RequireAuth = ({ children }) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return children;
};

const AppLayout = () => (
  <Switch>
    <Route path="/login">
      {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}
    </Route>
    <RequireAuth>
      <Route exact path="/" component={(props) => <Dashboard {...props} />} />
      <Route
        path="/dashboard"
        component={(props) => <Dashboard {...props} />}
      />
      <Route
        path="/kits-inward"
        component={(props) => <KitsInward {...props} />}
      />
      <Route
        path="/inward-check"
        component={(props) => <InwardCheck {...props} />}
      />
      <Route path="/login" component={(props) => <Login {...props} />} />
      <Route path="/logout" component={(props) => <Logout {...props} />} />
    </RequireAuth>
  </Switch>
);
export default AppLayout;