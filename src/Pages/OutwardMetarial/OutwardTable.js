import React from "react";
import ReactPaginate from "react-paginate";

const OutwardTable = () => {
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
              <th>Receipt Date</th>
              <th>Part No</th>
              <th>Part Name</th>
              <th>QTY</th>
              <th>Invoice</th>
              <th>Vendor</th>
              <th>Invoice Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>2</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>3</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>4</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>5</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>6</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
            </tr>
            <tr>
              <td>7</td>
              <td>25.02.2022</td>
              <td>096103-E00</td>

              <td>Door hinge</td>
              <td>24</td>
              <td>FTL/DC/001</td>
              <td>XYZ</td>
              <td>25022022</td>
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

export default OutwardTable;
