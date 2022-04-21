import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import * as Helper from "../../Layouts/Helper";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Swal from "sweetalert2";
const CrudTable = () => {
  //   const [kits, setKits] = useState([
  //     {
  //       id: 4,
  //       Model: "demomodel1",
  //       Body: "body2",
  //       Lot_No: "DEMOLOTNO1",
  //       Variant: "demovariant1",
  //       Order: {
  //         mrr_date: "18-4-2022",
  //         mrr_no: "34232",
  //       },
  //     },
  //     {
  //       id: 5,
  //       Model: "CRETA 1.6GL",
  //       Body: "body2",
  //       Lot_No: "LOT2",
  //       Variant: "variant2",
  //       Order: {
  //         mrr_date: "18-4-2022",
  //         mrr_no: "34232",
  //       },
  //     },
  //     {
  //       id: 7,
  //       Model: "CRETA 1.6GL",
  //       Body: "body3",
  //       Lot_No: "LOT2",
  //       Variant: "variant2",
  //       Order: {
  //         mrr_date: "18-4-2022",
  //         mrr_no: "39632",
  //       },
  //     },
  //     {
  //       id: 8,
  //       Model: "CRETA 5.6GL",
  //       Body: "body4",
  //       Lot_No: "LOT2",
  //       Variant: "variant2",
  //       Order: {
  //         mrr_date: "18-4-2022",
  //         mrr_no: "39632",
  //       },
  //     },
  //     {
  //       id: 9,
  //       Model: "CRETA 1.6 GL",
  //       Body: "MA3ENGL1S673532",
  //       Lot_No: "BGH2100015",
  //       Variant: "Variant1",
  //       Order: {
  //         mrr_date: "18-04-2022",
  //         mrr_no: "E2104B010A03A",
  //       },
  //     },
  //     {
  //       id: 10,
  //       Model: "CRETA 2.6 GL",
  //       Body: "MA3ENGL1S677657",
  //       Lot_No: "BGH2100453",
  //       Variant: "Variant2",
  //       Order: {
  //         mrr_date: "18-04-2022",
  //         mrr_no: "E2104B010A03A",
  //       },
  //     },
  //     {
  //       id: 11,
  //       Model: "CRETA 3.6 GL",
  //       Body: "MA3ENGL1S676756",
  //       Lot_No: "BGH2108795",
  //       Variant: "Variant3",
  //       Order: {
  //         mrr_date: "18-04-2022",
  //         mrr_no: "E2104B010A03A",
  //       },
  //     },
  //     {
  //       id: 12,
  //       Model: "CRETA 4.6 GL",
  //       Body: "MA3ENGL1S672378",
  //       Lot_No: "BGH2107525",
  //       Variant: "Variant4",
  //       Order: {
  //         mrr_date: "18-04-2022",
  //         mrr_no: "E2104B010A03A",
  //       },
  //     },
  //     {
  //       id: 13,
  //       Model: "CRETA 5.6 GL",
  //       Body: "MA3ENGL1S676543",
  //       Lot_No: "BGH2105679",
  //       Variant: "Variant5",
  //       Order: {
  //         mrr_date: "18-04-2022",
  //         mrr_no: "E2104B010A03A",
  //       },
  //     },
  //   ]);
  let modelList = [
    { label: "CRETA 1.6 GL", value: "CRETA 1.6 GL" },
    { label: "CRETA 2.6 GL", value: "CRETA 2.6 GL" },
    { label: "CRETA 3.6 GL", value: "CRETA 3.6 GL" },
    { label: "CRETA 4.6 GL", value: "CRETA 4.6 GL" },
    { label: "CRETA 5.6 GL", value: "CRETA 5.6 GL" },
  ];
  let variantList = [
    { label: "Variant1", value: "Variant1" },
    { label: "Variant2", value: "Variant2" },
    { label: "Variant3", value: "Variant3" },
    { label: "Variant4", value: "Variant4" },
    { label: "Variant5", value: "Variant5" },
  ];
  const [kits, setKits] = useState([]);
  const [show, setShow] = useState(false);
  const [toDate, setToDate] = useState();
  const [fromDate, setFromDate] = useState();
  const [id, setId] = useState(null);
  const [model, setModel] = useState(null);
  const [worder, setWorder] = useState(null);
  const [date, setDate] = useState();
  const [orderid, setOrderid] = useState(null);
  const [body, setBody] = useState(null);
  const [variant, setVariant] = useState(null);
  const [lot, setLot] = useState(null);
  useEffect(async () => {
    await axios
      .get("http://10.100.80.141:8000/kits/table")
      .then((response) => {
        setKits(response.data);
      })
      .catch(function (error) {
        Helper.alertMessage("error", error);
      });
  }, []);
  function fetchKitList() {
    axios
      .get("http://10.100.80.141:8000/kits/table")
      .then((response) => {
        setKits(response.data);
      })
      .catch(function (error) {
        Helper.alertMessage("error", error);
      });
  }
  const handleShow = (kit) => {
    console.log(moment(kit.Order.mrr_date).format("MMMM d, yyyy"));
    setWorder(kit.Order.mrr_no);
    setOrderid(kit.Order.id);
    setId(kit.id);
    setModel(kit.Model);
    setBody(kit.Body);
    setVariant(kit.Variant);
    setLot(kit.Lot_No);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleChangeModel = (value) => {
    setModel(value.value);
  };
  const handleChangeVariant = (value) => {
    setVariant(value.value);
  };
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put("http://10.100.80.141:8000/kits/update" + "/" + id, {
        Model: model,
        Body: body,
        Lot_No: lot,
        Variant: variant,
        Order: orderid,
      })
      .then((res) => {
        fetchKitList();
        setShow(false);
        Helper.alertMessage("success", "Successfully Updated");
      })
      .catch(function (res) {
        Helper.alertMessage("error", res);
      });
    axios
      .put("http://10.100.80.141:8000/kits/order_update" + "/" + orderid, {
        mrr_no: worder,
        mrr_date: moment(date).format("DD-MM-yyyy"),
      })
      .then((res) => {
        Helper.alertMessage("success", "Successfully Updated");
      })
      .catch(function (res) {
        Helper.alertMessage("error", res);
      });
  }
  function handleDelete(id) {
    axios
      .delete("http://10.100.80.141:8000/kits/update" + "/" + id)
      .then((response) => {
        fetchKitList();
        Swal.fire("Deleted!", "Successfully", "success");
        Helper.alertMessage("success", "Successfully Deleted");
      })
      .catch((error) => {
        Helper.alertMessage("error", error);
      });
  }
  return (
    <div className="row match-height">
      <div className="col-12">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="first-name-column">From</label>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                placeholderText="Select a date"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="first-name-column">To</label>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                placeholderText="Select a date"
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
                  <i class="icon-copy fa fa-download" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead className="table-dark">
                <tr>
                  <th>SN</th>
                  <th>W/Order</th>
                  <th>Date</th>
                  <th>Model</th>
                  <th>Body</th>
                  <th>Variant</th>
                  <th>Lot</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {kits &&
                  kits.map((kit, index) => {
                    // setModel(kit.Model);
                    // setBody(kit.Body);
                    // setVariant(kit.Variant);
                    // setLot(kit.Lot_No);
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{kit.Order.mrr_no}</td>
                        <td>{kit.Order.mrr_date}</td>
                        <td>{kit.Model}</td>
                        <td>{kit.Body}</td>
                        <td>{kit.Variant}</td>
                        <td>{kit.Lot_No}</td>

                        <td>
                          <button
                            onClick={() => handleShow(kit)}
                            className="btn text-warning btn-act"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              
                            </i>
                          </button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.value) {
                                  return handleDelete(kit.id);
                                }
                              });
                            }}
                            // onClick={() => {
                            //   if (window.confirm("Delete the item?")) {
                            //     return handleDelete(kit.id);
                            //   }
                            // }}
                            className="btn text-danger btn-act"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              
                            </i>
                          </button>
                        </td>
                        <Modal size="lg" show={show} onHide={handleClose}>
                          <Modal.Header>
                            <Modal.Title>Update Kit Details</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Row>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      W/Order No
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={worder}
                                      onChange={(e) =>
                                        setWorder(e.target.value)
                                      }
                                      required
                                    />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      Date
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <DatePicker
                                      selected={date}
                                      onChange={(event) => setDate(event)}
                                      dateFormat="MMMM d, yyyy"
                                      className="form-control"
                                      placeholderText={kit.Order.mrr_date}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      Model
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Select
                                      options={modelList}
                                      placeholder={model}
                                      onChange={handleChangeModel}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      Body
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={body}
                                      onChange={(e) => setBody(e.target.value)}
                                      required
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      Variant
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Select
                                      options={variantList}
                                      placeholder={variant}
                                      onChange={handleChangeVariant}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group className="mb-3">
                                    <Form.Label>
                                      Lot No
                                      <span style={{ color: "red" }}>*</span>
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={lot}
                                      onChange={(e) => setLot(e.target.value)}
                                      required
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                              Update
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {/* <div className="clearfix row pb-3">
            <div className="col-6 hint-text ">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul className="col-6 pagination justify-content-end">
              <li className="page-item">
                <a href="#" className="page-link">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
