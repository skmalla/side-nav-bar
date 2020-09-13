import React, { Component } from "react";

class GenrateInvoice extends Component {
  render() {
    return (
      <div className="container">
        <div className="row top-space">
          <div className="col-md-12 text-center">
            <p className="text-center text-danger">0 Employee Found!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5 className="text-center bold">Generate Invoice</h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Company Name</label>
              <select name="companies" id="companies" className="form-control">
                <option value="choose">Choose</option>
                <option value="toyota">Toyota</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="google">Google</option>
                <option value="microsoft">Microsoft</option>
                <option value="ibm">IBM</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Select Employee</label>
              <select name="companies" id="companies" className="form-control">
                <option value="choose">Choose</option>
                <option value="">Employee-1</option>
                <option value="">Employee-2</option>
                <option value="">Employee-3</option>
                <option value="">Employee-4</option>
                <option value="">Employee-5</option>
                <option value="">Employee-6</option>
              </select>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Total Experience</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Old CTC</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">New CTC</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Billing Amount</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <button className="btn btn-danger text-white btn-md">
              GENERATE BILL
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GenrateInvoice;
