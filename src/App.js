import { BrowserRouter, Route, useHistory } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Header from "./Layouts/Header";
import PreLoader from "./Layouts/PreLoader";
import Sidebar from "./Layouts/Sidebar";
import Footer from "./Layouts/Footer";

import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PreLoader />
        <Header />
        <Sidebar />
        <div className="mobile-menu-overlay" />
        <div class="main-container">
          <div class="xs-pd-20-10 pd-ltr-20">
            <AppLayout />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
