import React from "react";
import ReactPaginate from "react-paginate";
const OfflineStatusTable = () => {
  return (
    <div className="table-wrapper">
      <div className="table-responsive">
        <table
          className="table table-striped mt-3"
          style={{ textAlign: "center" }}
        >
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
              <td>MA3ENGL1S678899</td>
              <td>07-02-2022 15:22:56</td>
              <td>Touch up</td>
              <td>CRETA 1.6 GGL</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>SINGLE</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>MA3ENGL1S678899</td>
              <td>07-02-2022 15:22:56</td>
              <td>TRIM REPAIR</td>
              <td>CRETA 1.6 GGL</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>SINGLE</td>
              <td>GASOLINE</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>MA3ENGL1S678899</td>
              <td>07-02-2022 15:22:56</td>
              <td>CHASSIS</td>
              <td>CRETA 1.6 GGL</td>
              <td>R4G</td>
              <td>HIGH</td>
              <td>SINGLE</td>
              <td>GASOLINE</td>
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

export default OfflineStatusTable;
