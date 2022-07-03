import React from "react";
import Graph from "./Graph";
import Header from "./Header";
import PartInventoryTable from "./PartInventoryTable";
import Table1 from "./Table1";
import Table2 from "./Table2";

const PartInventoryStatus = () => {
  return (
    <>
      <Header />
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <h4 className="text-blue h3 mb-4">STORE INVENTORY STATUS</h4>
        </div>
        <div className="row match-height">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 mb-30">
                <div className="pd-20 card-box height-100-p">
                  <PartInventoryTable />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mb-30">
                <div className="pd-20 card-box height-100-p">
                  <Graph />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="pd-20 card-box height-100-p">
                  <Table1 />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="pd-20 card-box height-100-p">
                  <Table2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartInventoryStatus;
