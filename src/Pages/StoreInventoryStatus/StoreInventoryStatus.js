import React, { useState, useEffect } from "react";
import Header from "./Header";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import StoreTable from "./StoreTable";

const StoreInventoryStatus = () => {
  return (
    <>
      <Header />
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <h4 className="text-blue h3 mb-4">STORE INVENTORY STATUS</h4>
        </div>
        <div className="row match-height">
          <div className="col-12">
            <StoreTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreInventoryStatus;
