import React, { useState } from "react";

const Form = () => {
  const [dataList, setDataList] = useState([
    { model: "", body_no: "", variant: "", lot_no: "" },
  ]);

  const handleAddButton = () => {
    setDataList([
      ...dataList,
      { model: "", body_no: "", variant: "", lot_no: "" },
    ]);
  };
  const handleRemoveButton = (index) => {
    const list = [...dataList];
    list.splice(index, 1);
    setDataList(list);
  };
  return (
    <form className="form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="first-name-column">Inward Date</label>
            <input
              className="form-control date-picker"
              placeholder="Select Date"
              type="text"
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
            />
          </div>
        </div>
      </div>

      {dataList.map((data, index) => (
        <div key={index} className="row mt-4">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="form-group">
              <label htmlFor="last-name-column">Model</label>

              <fieldset className="form-group">
                <select
                  className="custom-select2 form-control"
                  name="state"
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

          <div
            className={
              dataList.length === 1
                ? "col-lg-3 col-md-6 col-sm-12"
                : "col-lg-2 col-md-6 col-12"
            }
          >
            <div className="form-group">
              <label htmlFor="country-floating">Body No.</label>
              <input
                className="form-control"
                type="text"
                placeholder="Body No."
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="company-column">Variant</label>
              <fieldset className="form-group">
                <select
                  className="custom-select2 form-control"
                  name="state"
                  style={{ width: "100%", height: "38" }}
                >
                  <option value="">Select Variant</option>
                  <option value="Amsterdam">India</option>
                  <option value="Berlin">UK</option>
                  <option value="Frankfurt">US</option>
                </select>
              </fieldset>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="form-group">
              <label htmlFor="email-id-column">Lot No.</label>
              <input
                className="form-control"
                type="text"
                placeholder="Lot No."
              />
            </div>
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12 pt-4 mt-2">
            {dataList.length > 1 && (
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
          <button type="button" class="btn btn-primary me-1 mb-1 ml-2">
            Submit
          </button>
          <button type="reset" className="btn btn-info me-1 mb-1 ml-2">
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
