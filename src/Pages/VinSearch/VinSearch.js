import React, { useState, useEffect } from "react";
import Header from "./Header";
import Select from "react-select";
import axios from "axios";
import * as Helper from "../../Layouts/Helper";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";
import VinTable from "./VinTable";

const VinSearch = () => {
  return (
    <>
      <Header />
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <h4 className="text-blue h3 mb-4">VIN SEARCH</h4>
        </div>
        <div className="row match-height">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-3 ">
                <div className="form-group">
                  <label htmlFor="first-name-column">From Date</label>
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
              <div className="col-lg-3 ">
                <div className="form-group">
                  <label htmlFor="first-name-column">To Date</label>
                  <DatePicker
                    // selected={toDate}
                    // onChange={(date) => setToDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="form-control"
                    placeholderText="Select a date"
                  />
                </div>
              </div>
              <div className="col-lg-4">
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
              <div className="col-lg-2  d-flex justify-content-end">
                <div className="form-group">
                  <button
                    style={{
                      marginTop: "30px",
                    }}
                    type="button"
                    className="btn btn-info btn-icon icon-left"
                    // onClick={handleSearchButton}
                  >
                    Search
                    <span className="badge bg-transparent">
                      <i class="icon-copy fa fa-search" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="last-name-column">VIN</label>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Input VIN Number"
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label htmlFor="last-name-column">Variant</label>

                  <fieldset className="form-group">
                    <Select
                      //   options={statusList}
                      placeholder="Select Variant"
                      //   onChange={handleSearchStatus}
                    />
                  </fieldset>
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-end">
                <div className="form-group">
                  <button
                    style={{
                      marginTop: "30px",
                    }}
                    type="button"
                    className="btn btn-success btn-icon icon-left"
                  >
                    Excel Download
                    <span className="badge bg-transparent">
                      <i
                        class="icon-copy fa fa-download"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <VinTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default VinSearch;
