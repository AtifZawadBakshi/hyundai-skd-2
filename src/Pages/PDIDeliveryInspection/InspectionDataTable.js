import React from "react";

const InspectionDataTable = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>VIN</th>
              <th>Units</th>
              <th>Model</th>
              <th>Engine</th>
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
              <td>MA3ENGL1S678899</td>
              <td>20</td>
              <td>CRETA 1.6 GGL</td>
              <td>E2104B001</td>
              <td>R4G</td>
              <td>High</td>
              <td>Single</td>
              <td>Gasoline</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Inspectio</h4>
            <table
              className="table table-bordered"
              style={{ textAlign: "center" }}
            >
              <thead className="table-dark">
                <tr>
                  <th>SN</th>
                  <th>Check Items</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Check the ODO meter Reading Less than 35 KM.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ensure Barcode along with TOS VIN .</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Check for Front / Rear/ FDR Emblems & Logos.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Check All tyre are same brand.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ensure battery SOC {">"} 75 % / Fuel level.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Check Front and Rear Wippper blade.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Check 2 keys availability.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Check OBD cover.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Check all doors Glass/ Audio/ All lamps/ A/C.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Check Exterior quality Chip off/Scratch/Dent/Damages</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Check Interior Contamination/ scratch & damages.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Any abnormalities in interior.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    Check Spare wheel /area Scratch/Damage/ Contamiantion.
                  </td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Check Alloy Wheel damages.</td>
                  <td>
                    <div className="form-check ml-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-50-p">
            <h4 className="mb-20 h4">Tio</h4>
            <table className="table table-bordered">
              <thead className="table-dark" style={{ textAlign: "center" }}>
                <tr>
                  <th>SN</th>
                  <th>Check Items</th>
                  <th>PDI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>1</td>
                  <td>UVO STICKER</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>2</td>
                  <td>RSA STICKER</td>
                  <td>
                    <div className="form-check" style={{ textAlign: "center" }}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>3</td>
                  <td>WARNING TRIANGLE</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>4</td>
                  <td>FIRST AID KIT</td>
                  <td>
                    <div className="form-check" style={{ textAlign: "center" }}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>5</td>
                  <td>SP2I-LEATHER POUCH –DOMESTIC</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>6</td>
                  <td>SP2I AIR PURIFIER MANUAL</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>7</td>
                  <td>SP2I - OWNERS MANUAL- ENGLISH</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>8</td>
                  <td>SP2I - QRG MANUAL</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>9</td>
                  <td>SP2I AVNT MANUAL</td>
                  <td style={{ textAlign: "center" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pd-20 card-box height-50-p mt-3">
            <h4 className="mb-20 h4">Re-confirmation</h4>

            <div className="container row d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-success"
                style={{ height: "40px", width: "120px" }}
              >
                Wrap Guard
              </button>
              <button
                type="button"
                class="btn btn-success"
                style={{ height: "40px", width: "120px" }}
              >
                Washing
              </button>
              <button
                type="button"
                class="btn btn-success"
                style={{ height: "40px", width: "120px" }}
              ></button>
            </div>
          </div>
          <div className="pd-20 card-box height-50-p mt-3">
            <h4 className="mb-20 h4">Battey Test Result</h4>
            <div className="container row">
              <input
                className="form-control form-control-sm"
                id="formFileLg"
                type="file"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <button type="button" className="btn btn-primary mx-2">
              START
            </button>
            <button type="button" className="btn btn-primary mx-2">
              INSP
            </button>
            <button type="button" className="btn btn-primary mx-2">
              COMP
            </button>
          </div>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <button type="button" className="btn btn-success mx-2">
            SAVE
          </button>
          <button type="button" className="btn btn-secondary mx-2">
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default InspectionDataTable;
