import React from "react";
import { Table, colSpan, rowSpan } from "react-bootstrap";

const Table2 = () => {
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
                Shortage
              </th>
              <th colSpan={2} style={{ verticalAlign: "middle" }}>
                ETA
              </th>
            </tr>
            <tr>
              <th>Date</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Leather Pouch</td>
              <td>QY</td>
              <td>GO641201907120001</td>
              <td>Dom-Leather Pouch</td>
              <td>Shortage</td>
              <td>01.02.2021</td>
              <td>400</td>
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

export default Table2;
