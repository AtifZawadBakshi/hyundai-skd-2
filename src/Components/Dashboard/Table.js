import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Table = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="row match-height">
      <div className="col-12">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="first-name-column">From</label>
              <input
                className="form-control date-picker"
                placeholder="Select Date"
                type="text"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="first-name-column">To</label>
              <input
                className="form-control date-picker"
                placeholder="Select Date"
                type="text"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="last-name-column">Model</label>

              <fieldset className="form-group">
                <select
                  className="custom-select2 form-control"
                  style={{ width: "100%", height: 38 }}
                >
                  <option value="">Select Model</option>
                  <option value="Amsterdam">India</option>
                  <option value="Berlin">UK</option>
                  <option value="Frankfurt">US</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="last-name-column">Status</label>

              <fieldset className="form-group">
                <select
                  className="custom-select2 form-control"
                  style={{ width: "100%", height: 38 }}
                >
                  <option value="">Select Status</option>

                  <option value="Berlin">Processed</option>
                  <option value="Frankfurt">Storage</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <div className="form-group">
              <button
                style={{ marginTop: "30px" }}
                type="button"
                className="btn btn-info btn-icon icon-left"
              >
                Search
                <span className="badge bg-transparent">
                  <i class="icon-copy fa fa-search" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-12 d-flex justify-content-end">
            <div className="form-group">
              <button
                style={{ marginTop: "30px" }}
                type="button"
                className="btn btn-success btn-icon icon-left"
              >
                Excel Download
                <span className="badge bg-transparent">
                  <i
                    className="icon-copy fa fa-download"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped " id="table1">
            <thead>
              <tr>
                <th>SN</th>
                <th>VIN</th>
                <th>W/Order</th>
                <th>Lot No.</th>
                <th>Date & Time</th>
                <th>Model</th>
                <th>color</th>
                <th>Trim</th>
                <th>color</th>
                <th>Fuel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-success" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-primary" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span
                    className="badge bg-secondary"
                    style={{ color: "white" }}
                  >
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-danger" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-warning" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-info" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>MA3ENGL1S678899</td>
                <td>E2104B010A03A</td>
                <td>BGH2100015</td>
                <td>07-02-22 15:22:56</td>
                <td>CRETA 1.6 GL</td>
                <td>R4G</td>
                <td>HIGH</td>
                <td>SINGLE</td>
                <td>GASOLINE</td>
                <td>
                  <span className="badge bg-dark" style={{ color: "white" }}>
                    Processed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
