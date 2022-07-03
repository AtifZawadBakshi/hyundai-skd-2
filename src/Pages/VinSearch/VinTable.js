import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "react-datepicker/dist/react-datepicker.css";
import VinDetails from "./VinDetails";

const VinTable = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="table-wrapper">
      <div className="table-responsive">
        <table className="table table-striped " style={{ textAlign: "center" }}>
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>VIN</th>
              <th>Date & Time</th>
              <th>Station</th>
              <th>Model</th>
              <th>Color</th>
              <th>Trim</th>
              <th>Color</th>
              <th>Fuel</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td
                onClick={() => handleShow()}
                data-toggle="modal"
                style={{ textDecoration: "underline" }}
              >
                MA3ENGL1S678899
              </td>
              <td>07-02-2022 15:22:56</td>
              <td>ED SANDING</td>
              <td>CRETA 1.6 GGL</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>SINGLE</td>
              <td>GASOLINE</td>
              <td></td>
              <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closedButton>
                  <Modal.Title style={{ textAlign: "center" }}>
                    Vehicle Information Details [MES]
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <VinDetails />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
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
