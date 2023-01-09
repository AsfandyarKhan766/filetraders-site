import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CategoryV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color"> By Cities</h6>
                <h1 className="section-title">Files In Your Cities</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop">
                  <span className="category-icon">
                    <i class="fa-solid fa-house-user" />
                  </span>
                  <span className="category-title">ISLAMABAD</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop">
                  <span className="category-icon">
                    <i className="flaticon-swimming" />
                  </span>
                  <span className="category-title">Lahore</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop">
                  <span className="category-icon">
                    <i className="flaticon-secure-shield" />
                  </span>
                  <span className="category-title">Karachi</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop">
                  <span className="category-icon">
                    <i className="flaticon-stethoscope" />
                  </span>
                  <span className="category-title">Peshawar</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryV1;