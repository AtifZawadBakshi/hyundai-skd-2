import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { URL, TABLE, UPDATE, SEARCH, ORDER_LIST } from "../../Axios/Api";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import axios from "axios";
import * as Helper from "../../Layouts/Helper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";

const VinTable = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="table-wrapper my-3">
      <div className="table-responsive">
        <table
          className="table table-bordered "
          style={{ textAlign: "center" }}
        >
          <thead className="table-dark ">
            <tr>
              <th>SN</th>
              <th>VIN</th>
              <th>Stage</th>
              <th>Date & Time</th>
              <th>Model</th>
              <th>Engine</th>
              <th>Color</th>
              <th>Trim</th>
              <th>Fuel</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>MA3ENGL1S001226</td>
              <th>BIW INPUT</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>ED SANDING</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>PRIMER</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>TOPCOAT</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>WAX & B/T</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>BIP SIGNOFF</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>TRIM</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>CHASSIS</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>FINAL</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>TESTERLINE</th>
              <td>02-02-2022 09:30:20</td>
              <td>Creta 1.6 GL</td>
              <td>R4G</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>Sign Off</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <th>PDI DELIVERY</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="clearfix row pb-3"></div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={3}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        // onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default VinTable;
