import React from "react";

function Reports() {
  return (

    <>
    <div className="col-12">
      <div className="card card-body  reports-dashboard" >
        <div className="row gx-lg-4">
          <div className="col-sm-6 col-lg-3">
            <div
              className="media"
             
             
            >
              <div className="media-body">
                <h6 className="card-subtitle">All</h6>
                <span className="card-title h3">24</span>
              </div>
              <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                <i className="bi bi-window-fullscreen"></i>

              </span>
            </div>
            <div className="d-lg-none">
              <hr />
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 column-divider">
            <div
              className="media"
              
              
            >
              <div className="media-body">
                <h6 className="card-subtitle">Delivered</h6>
                <span className="card-title h3">4</span>
              </div>
              <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                <i className="bi bi-truck"></i>
              </span>
            </div>
            <div className="d-lg-none">
              <hr />
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 column-divider">
            <div
              className="media"
             
            >
              <div className="media-body">
                <h6 className="card-subtitle">Returned</h6>
                <span className="card-title h3">0</span>
              </div>
              <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                <i className="bi bi-arrow-return-left"></i>
              </span>
            </div>
            <div className="d-lg-none">
              <hr />
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 column-divider">
            <div
              className="media"
              
            >
              <div className="media-body">
                <h6 className="card-subtitle">Failed</h6>
                <span className="card-title h3">2</span>
              </div>
              <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                <i className="bi bi-send-exclamation"></i>
              </span>
            </div>
            <div className="d-lg-none">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Reports;
