import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Helper from "../../Layouts/Helper";
import Select from "react-select";
import moment from "moment";
const Form = () => {
  const [date, setDate] = useState(null);
  const [workOrder, setWorkOrder] = useState(null);

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
  const [kits, setKits] = useState([
    { Model: "", Body: "", Lot_No: "", Variant: "" },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...kits];
    values[index][event.target.name] = event.target.value;
    setKits(values);
  };

  const handleAddButton = () => {
    setKits([...kits, { Model: "", Body: "", Lot_No: "", Variant: "" }]);
  };

  const handleRemoveButton = (index) => {
    const list = [...kits];
    list.splice(index, 1);
    setKits(list);
  };
  const handleResetButton = () => {
    reset();
  };

  function reset() {
    setDate(null);
    setWorkOrder("");
    setKits([]);
  }

  const handleSubmitButton = (e) => {
    e.preventDefault();

    console.log("Inward Date: ", moment(date).format("DD-MM-yyyy"));
    console.log("W/Order No: ", workOrder);
    console.log("kits: ", kits);
    axios
      .post("http://10.100.80.141:8000/kits/order_add/", {
        mrr_date: moment(date).format("DD-MM-yyyy"),
        mrr_no: workOrder,
        kits: kits,
      })
      .then((res) => {
        reset();
        Helper.alertMessage("success", "Successfully Added");
      })
      .catch(function (res) {
        Helper.alertMessage("error", res);
      });
  };

  const handleVariantInput = (index, event) => {
    const values = [...kits];
    values[index]["Variant"] = event.value;
    setKits(values);
  };

  const handleModelInput = (index, event) => {
    const values = [...kits];
    values[index]["Model"] = event.value;
    setKits(values);
  };
  return (
    <form className="form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="first-name-column">Inward Date</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
              className="form-control"
              placeholderText="Select a date"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="city-column">W/Order No.</label>
            <input
              className="form-control"
              type="text"
              placeholder="W/Order No."
              value={workOrder}
              onChange={(e) => setWorkOrder(e.target.value)}
            />
          </div>
        </div>
      </div>

      {kits.map((data, index) => (
        <div key={index} className="row mt-4">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="last-name-column">Model</label>

              <fieldset className="form-group">
                <Select
                  options={modelList}
                  placeholder="Select Model"
                  onChange={(event) => {
                    handleModelInput(index, event);
                  }}
                />
                {/* <select
                  className="form-control"
                  // className="select form-control"
                  name="model"
                  style={{ width: "100%", height: "38px" }}
                  value={data.model}
                  onChange={(event) => {
                    handleChangeInput(index, event);
                  }}
                >
                  <option value="">Select Model</option>
                  <option value="CRETA 1.6 GL">CRETA 1.6 GL</option>
                  <option value="CRETA 2.6 GL">CRETA 2.6 GL</option>
                  <option value="CRETA 3.6 GL">CRETA 3.6 GL</option>
                  <option value="CRETA 4.6 GL">CRETA 4.6 GL</option>
                  <option value="CRETA 5.6 GL">CRETA 5.6 GL</option>
                </select> */}
              </fieldset>
            </div>
          </div>

          <div
            className={
              kits.length === 1
                ? "col-lg-3 col-md-6 col-sm-12"
                : "col-lg-2 col-md-6 col-12"
            }
          >
            <div className="form-group">
              <label htmlFor="country-floating">Body No.</label>
              <input
                style={{ width: "100%", height: "38px" }}
                className="form-control"
                type="text"
                name="Body"
                placeholder="Body No."
                value={data.Body}
                onChange={(event) => {
                  handleChangeInput(index, event);
                }}
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="company-column">Variant</label>
              <fieldset className="form-group">
                <Select
                  options={variantList}
                  placeholder="Select Variant"
                  onChange={(event) => {
                    handleVariantInput(index, event);
                  }}
                />
                {/* <select
                  className="form-control"
                  // className="select form-control"
                  name="variant"
                  style={{ width: "100%", height: "38px" }}
                  value={data.variant}
                  onChange={(event) => {
                    handleChangeInput(index, event);
                  }}
                >
                  <option value="">Select Variant</option>
                  <option value="Variant1">Variant1</option>
                  <option value="Variant2">Variant2</option>
                  <option value="Variant3">Variant3</option>
                  <option value="Variant4">Variant4</option>
                  <option value="Variant5">Variant5</option>
                </select> */}
              </fieldset>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="email-id-column">Lot No.</label>
              <input
                style={{ width: "100%", height: "38px" }}
                className="form-control"
                type="text"
                name="Lot_No"
                placeholder="Lot No."
                value={data.Lot_No}
                onChange={(event) => {
                  handleChangeInput(index, event);
                }}
              />
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12 pt-4 mt-2">
            {kits.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveButton(index)}
                className="btn btn-danger me-1 mb-1 ml-2"
              >
                <span className="micon dw dw-trash " />
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-12 d-flex justify-content-end mt-4">
          <button
            type="button"
            onClick={handleSubmitButton}
            class="btn btn-primary me-1 mb-1 ml-2"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={handleResetButton}
            className="btn btn-info me-1 mb-1 ml-2"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleAddButton}
            className="btn btn-warning me-1 mb-1 ml-2"
          >
            <span className="micon dw dw-add mt-2 mr-2" />
            Add
          </button>
          {/* <button
            type="button"
            onClick={handleRemoveButton}
            className="btn btn-danger me-1 mb-1 ml-2"
          >
            <span className="micon dw dw-trash mt-2 mr-2" />
            Remove
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default Form;
