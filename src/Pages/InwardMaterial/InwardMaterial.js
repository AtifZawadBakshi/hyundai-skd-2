import React, { useState, useEffect } from "react";
import Header from "./Header";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InwardTable from "./InwardTable";

const InwardMaterial = () => {
  return (
    <>
      <Header />
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <h4 className="text-blue h3 mb-4">Inward Material</h4>
        </div>
        <div className="row match-height">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Part Name</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input Part Name"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Model</label>

                  <fieldset className="form-group">
                    <Select
                      //   options={searchModelList}
                      placeholder="Select Model"
                      //   onChange={handleSearchModel}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="form-group">
                  <label htmlFor="first-name-column">Date</label>
                  <DatePicker
                    // selected={fromDate}
                    // onChange={(date) => {
                    //   setFromDate(date);
                    // }}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    placeholderText="Select a date"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">PO NO</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input PO NO"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Part No</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input Part No"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Vendor</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input Vendor"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Invoice No</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input Invoice No"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label htmlFor="last-name-column">Invoice Qty</label>

                  <fieldset className="form-group">
                    <Select
                      //   options={searchModelList}
                      placeholder="Select Invoice Qty"
                      //   onChange={handleSearchModel}
                    />
                  </fieldset>
                </div>
              </div>
            </div>
            <InwardTable />
            <div className="row d-flex justify-content-end ">
              <button type="button" className="btn btn-info mx-2">
                Goods Inward
              </button>
              <button type="button" className="btn btn-info mr-4">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InwardMaterial;
