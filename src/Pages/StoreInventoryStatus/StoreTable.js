import React from "react";
import ReactPaginate from "react-paginate";

const StoreTable = () => {
  return (
    <div className="table-wrapper">
      <div className="table-responsive">
        <table
          className="table table-bordered mt-3"
          style={{ textAlign: "center" }}
        >
          <thead className="table-dark">
            <tr>
              <th>SN</th>
              <th>Category</th>
              <th>Part Number</th>
              <th>Item Description</th>
              <th>Model</th>
              <th>Lead Time</th>
              <th>Buffer Stock</th>
              <th>Inward Material</th>
              <th>Consumed</th>
              <th>Rejection</th>
              <th>Current Stock</th>
              <th>Coverage Days</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bolt</td>
              <td>02346-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>25</td>
              <td>350</td>
              <td>300</td>
              <td>28127</td>
              <td>23</td>
              <td>6450</td>
              <td>25</td>
              <td>B-01-2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nut</td>
              <td>02346-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>25</td>
              <td>1700</td>
              <td>10</td>
              <td>673</td>
              <td>0</td>
              <td>377</td>
              <td>1</td>
              <td>B-01-2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Washers</td>
              <td>0234-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>2s</td>
              <td>1322</td>
              <td>104</td>
              <td>237</td>
              <td>12</td>
              <td>390</td>
              <td>12</td>
              <td>B-02-2</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bolt</td>
              <td>02346-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>25</td>
              <td>350</td>
              <td>300</td>
              <td>28127</td>
              <td>23</td>
              <td>6450</td>
              <td>25</td>
              <td>B-01-2</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nut</td>
              <td>02346-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>25</td>
              <td>1700</td>
              <td>10</td>
              <td>673</td>
              <td>0</td>
              <td>377</td>
              <td>1</td>
              <td>B-01-2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Washers</td>
              <td>0234-E0023</td>
              <td>Wrap Guard</td>
              <td>SU2id</td>
              <td>2s</td>
              <td>1322</td>
              <td>104</td>
              <td>237</td>
              <td>12</td>
              <td>390</td>
              <td>12</td>
              <td>B-02-2</td>
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

export default StoreTable;
