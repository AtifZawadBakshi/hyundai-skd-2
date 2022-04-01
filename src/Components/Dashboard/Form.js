import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="first-name-column">Inward Date</label>
            <input
              className="form-control date-picker"
              placeholder="Select Date"
              type="text"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
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
        <div className="col-lg-4 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="city-column">W/Order No.</label>
            <input
              className="form-control"
              type="text"
              placeholder="W/Order No."
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="country-floating">Body No.</label>
            <input
              className="form-control"
              type="text"
              placeholder="Body No."
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
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
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="form-group">
            <label htmlFor="email-id-column">Lot No.</label>
            <input className="form-control" type="text" placeholder="Lot No." />
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end mt-4">
          <button type="button" class="btn btn-primary me-1 mb-1 ml-2">
            Submit
          </button>
          <button type="reset" className="btn btn-info me-1 mb-1 ml-2">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
