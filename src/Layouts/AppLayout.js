import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Auth/Login";
import Logout from "../Components/Auth/Logout";
import InwardCheck from "../Components/InwardCheck/InwardCheck";
import KitsInward from "../Components/KitsInward/KitsInward";
import Setting from "../Components/Setting/Setting";
import Profile from "../Components/Profile/Profile";
import VinSearch from "../Pages/VinSearch/VinSearch";
import VinTracking from "../Pages/VinTracking/VinTracking";
import QCVehicleHistoryCard from "../Pages/QCVehicleHistoryCard/QCVehicleHistoryCard";
import PDIDeliveryInspection from "../Pages/PDIDeliveryInspection/PDIDeliveryInspection";
import OfflineStatus from "../Pages/OfflineStatus/OfflineStatus";
import InwardMaterial from "../Pages/InwardMaterial/InwardMaterial";
import OutwardMaterial from "../Pages/OutwardMetarial/OutwardMaterial";
import StoreInventoryStatus from "../Pages/StoreInventoryStatus/StoreInventoryStatus";
import PartInventoryStatus from "../Pages/PartInventoryStatus/PartInventoryStatus";
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
      <Route
        path="/vin-search"
        component={(props) => <VinSearch {...props} />}
      />
      <Route
        path="/vin-tracking"
        component={(props) => <VinTracking {...props} />}
      />
      <Route
        path="/history-card"
        component={(props) => <QCVehicleHistoryCard {...props} />}
      />
      <Route
        path="/pdi-delivery-inspection"
        component={(props) => <PDIDeliveryInspection {...props} />}
      />
      <Route
        path="/inward-material"
        component={(props) => <InwardMaterial {...props} />}
      />
      <Route
        path="/outward-material"
        component={(props) => <OutwardMaterial {...props} />}
      />
      <Route
        path="/store-inventory-status"
        component={(props) => <StoreInventoryStatus {...props} />}
      />
      <Route
        path="/part-inventory-status"
        component={(props) => <PartInventoryStatus {...props} />}
      />
      <Route
        path="/offline-status"
        component={(props) => <OfflineStatus {...props} />}
      />
      <Route path="/profile" component={(props) => <Profile {...props} />} />
      <Route path="/setting" component={(props) => <Setting {...props} />} />
      <Route path="/login" component={(props) => <Login {...props} />} />
      <Route path="/logout" component={(props) => <Logout {...props} />} />
    </RequireAuth>
  </Switch>
);
export default AppLayout;
