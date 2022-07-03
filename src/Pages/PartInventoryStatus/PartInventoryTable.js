import React from "react";
import ReactPaginate from "react-paginate";
const PartInventoryTable = () => {
  return (
    <div className="table-wrapper">
      <div className="table-responsive">
        <table
          className="table table-bordered m-0 p-0"
          style={{ textAlign: "center" }}
        >
          <thead className="table-dark">
            <tr>
              <th className="p-1">SN</th>
              <th className="p-1">Part No</th>
              <th className="p-1">Part Name</th>
              <th className="p-1">Model</th>
              <th className="p-1">Buffer Stock</th>
              <th className="p-1">Inward QTY</th>
              <th className="p-1">Issued QTY</th>
              <th className="p-1">Rejection QTY</th>
              <th className="p-1">Current QTY</th>
              <th className="p-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-1">1</td>
              <td className="p-1">1635-E003</td>
              <td className="p-1">Wax plug</td>
              <td className="p-1">SU2id</td>
              <td className="p-1">1200</td>
              <td className="p-1">3422</td>
              <td className="p-1">400</td>
              <td className="p-1">5</td>
              <td className="p-1">3017</td>
              <td className="p-1"></td>
            </tr>
            <tr>
              <td className="p-1">2</td>
              <td className="p-1">3756-E003</td>
              <td className="p-1">sealer</td>
              <td className="p-1">SU2id</td>
              <td className="p-1">345</td>
              <td className="p-1">345</td>
              <td className="p-1">300</td>
              <td className="p-1">10</td>
              <td className="p-1">35</td>
              <td className="p-1"></td>
            </tr>
            <tr>
              <td className="p-1">3</td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>
            <tr>
              <td className="p-1">4</td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>
            <tr>
              <td className="p-1">5</td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
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

export default PartInventoryTable;
