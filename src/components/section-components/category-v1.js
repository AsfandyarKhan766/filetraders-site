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
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">See Files</h6>
                <h1 className="section-title">Top Societies</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop-metro">
                  <span className="category-icon society-icon">
                    {/* <i class="fa-solid fa-house-user" /> */}
                    <img className="" src="assets/img/icons/custom-img/metrocity-icon.png" alt="metrocity-icon" />
                  </span>
                  <span className="category-title">Metro City Gujar Khan</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop-bahria">
                  <span className="category-icon society-icon">
                    {/* <i className="flaticon-swimming" /> */}
                    <img className="" src="assets/img/icons/custom-img/behria-icon.png" alt="bahria-icon" />
                  </span>
                  <span className="category-title">Behria Town Islamabad</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop-top-city">
                  <span className="category-icon society-icon">
                    {/* <i className="flaticon-secure-shield" /> */}
                    <img className="" src="assets/img/icons/custom-img/topcity-icon.png" alt="topcity-icon" />
                  </span>
                  <span className="category-title">Top City Islamabad</span>
                  <span className="category-btn">
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 text-center">
                <Link to="/shop-park-view">
                  <span className="category-icon society-icon">
                    {/* <i className="flaticon-stethoscope" /> */}
                    <img className="" src="assets/img/icons/custom-img/parkview-icon.png" alt="parkview-icon.png" />
                  </span>
                  <span className="category-title">ParkView City Islamabad</span>
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
