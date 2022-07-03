import React from "react";
import { Table, colSpan, rowSpan } from "react-bootstrap";
const VinDetails = () => {
  return (
    <Table striped bordered hover>
      <tr>
        <th>W/Order</th>
        <td>E2104B010A03A</td>
        <th>Sun roof</th>
        <td>1</td>
        <th>ABS</th>
        <td>EBD</td>
      </tr>
      <tr>
        <th>Body No</th>
        <td>FHW 001226</td>
        <th>Air bag</th>
        <td>7</td>
        <th rowSpan={2} style={{ verticalAlign: "middle" }}>
          SUSPENSION
        </th>
        <td></td>
      </tr>
      <tr>
        <th>Model</th>
        <td>Creta SU2id</td>
        <th>Fuel</th>
        <td>UNLEADED GASOLINE</td>
        <td>Rear: CTBA Type (2WD)</td>
      </tr>
      <tr>
        <th>Nation</th>
        <td>Bangladesh</td>
        <th>CAM Type</th>
        <td>DOHC D-CVVT</td>
        <th rowSpan={2} style={{ verticalAlign: "middle" }}>
          SHOCK ABSORBER
        </th>
        <td>Front: Strut Type</td>
      </tr>
      <tr>
        <th>VIN</th>
        <td>MALFEB1ALFHW001226</td>
        <th>Value System</th>
        <td>16 Valve, HLA</td>
        <td>Rear: Shock Absorber Type </td>
      </tr>
      <tr>
        <th>Engine CC</th>
        <td>Gamma II 1.5 MPI</td>
        <th>Ignition System</th>
        <td>Spark Ignition</td>
        <th>Wheel Spec</th>
        <td> ALLOY WHEEL Real Steel Gray (RSG)</td>
      </tr>
      <tr>
        <th>Engine</th>
        <td>G3LCKM831002</td>
        <th>Color</th>
        <td>R4G</td>
        <th rowSpan={2} style={{ verticalAlign: "middle" }}>
          WHEEL TREAD
        </th>
        <td>FRONT (205/65R16)</td>
      </tr>
      <tr>
        <th>Key no.</th>
        <td>M2248</td>
        <th>Interior System</th>
        <td>Black/Cognac 2 Tone (NGN)</td>
        <td>REAR (205/65R16)</td>
      </tr>
      <tr>
        <th>Transmission</th>
        <td>ZE25KU951719</td>
        <th>Tone</th>
        <td>Single or Dual</td>
        <th>Roof rack</th>
        <td>Yes</td>
      </tr>
      <tr>
        <th>TM Spec</th>
        <td>M6</td>
        <th>Black Tape</th>
        <td>Yes</td>
        <th></th>
        <td></td>
      </tr>
    </Table>
  );
};

export default VinDetails;
