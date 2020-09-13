import React, { Component } from "react";
import "./App.css";

class NewProfile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row top-space">
          <div className="col-md-12">
            <h5 className="text-center bold">New Profile</h5>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Company</label>
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
              <label htmlFor="">For Requirement</label>
              <select name="companies" id="companies" className="form-control">
                <option value="choose">Choose</option>
                <option value="">Asst. Engineer</option>
                <option value="">Mech. Engineer</option>
                <option value="">Machine Designer</option>
                <option value="">Front-End-Developer</option>
                <option value="">UI/UX Designer</option>
                <option value="">Data Analyst</option>
              </select>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">First Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">e-Mail</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="">Mobile No</label>
              <input type="number" className="form-control" />
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
                  <label htmlFor="">Experience</label>
                  <br />
                  <input
                    type="radio"
                    id="experience"
                    name="exp"
                    value="experience"
                  />
                  <label for="male" className="ml-2">
                    Experience
                  </label>
                  <br />
                  <input type="radio" id="fresher" name="exp" value="fresher" />
                  <label for="male" className="ml-2">
                    Fresher
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Total Experience</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">CTC</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Expected CTC</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn text-white btn-primary">SAVE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProfile;
