import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CallToActonV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>You want to add your File?</h1>
                  <p>We can also list your files here, provide us the details</p>
                </div>
                <div className="btn-wrapper go-top">
                  {/* <Link className="btn btn-effect-3 btn-white" to="/contact">Explore Properties <i className="icon-next" /></Link> */}
                  <a className="btn btn-effect-3 btn-white" href="mailto:example@example.com">
                    Email Us Your File
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToActonV1;
