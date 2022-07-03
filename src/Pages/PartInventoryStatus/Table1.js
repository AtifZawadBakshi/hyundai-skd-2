import React from "react";
import { Table, colSpan, rowSpan } from "react-bootstrap";

const Table1 = () => {
  return (
    <div className="table-wrapper my-3">
      <div className="table-responsive">
        <Table bordered style={{ textAlign: "center" }}>
          <thead
            variant="dark"
            style={{ backgroundColor: "#001A23", color: "white" }}
          >
            <tr>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Serial No.
              </th>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Category
              </th>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Model
              </th>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Part No
              </th>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Part Name
              </th>
              <th rowSpan={2} style={{ verticalAlign: "middle" }}>
                Buffer Stock
              </th>
              <th colSpan={2} style={{ verticalAlign: "middle" }}>
                Current Stock
              </th>
            </tr>
            <tr>
              <th>Current Stock</th>
              <th>Coverage Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Leather Pouch</td>
              <td>QY</td>
              <td>GO641201907120001</td>
              <td>Dom-Leather Pouch</td>
              <td>6000</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Table1;
