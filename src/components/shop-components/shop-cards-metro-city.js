import React from "react";
import { Link } from "react-router-dom";

function MetroCityCards() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <div className="col-xl-4 col-sm-6 col-12">
        <div className="ltn__product-item ltn__product-item-4 text-center---">
          <div className="product-img go-top">
            {/* <Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link> */}
            <Link to="#">
              <img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" />
            </Link>
            {/* <div className="product-badge">
							<ul>
								<li className="sale-badge bg-green">For Rent</li>
							</ul>
							</div> */}
            <div className="product-img-location-gallery">
              <div className="product-img-location">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="flaticon-pin" /> Saon Garden, Islamabad
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="product-img-gallery go-top">
                        <ul>
                          <li>
                            <Link to="/product-details">
                              <i className="fas fa-camera" /> 4
                            </Link>
                          </li>
                          <li>
                            <Link to="/product-details">
                              <i className="fas fa-film" /> 2
                            </Link>
                          </li>
                        </ul>
                      </div> */}
            </div>
          </div>
          <div className="product-info">
            <div className="product-price">
              <span>
                $34,900<label>/Month</label>
              </span>
            </div>
            <h2 className="product-title go-top">
              {/* <Link to="/product-details">New Apartment Nice View</Link> */}
              <Link to="#">5 Marla File Available For Sale</Link>
            </h2>
            <div className="product-description">
              <p>
                5 Marla file for sale good location <br />
                rate kam hosakta ha contact
              </p>
            </div>
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before">
                      <li>
                        <span>
                          3 <i className="flaticon-bed" />
                        </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>
                          2 <i className="flaticon-clean" />
                        </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>
                          3450 <i className="flaticon-square-shape-design-interface-tool-symbol" />
                        </span>
                        square Ft
                      </li>
                    </ul> */}
          </div>
          <div className="product-info-bottom">
            <div className="real-estate-agent">
              <div className="agent-img go-top">
                <Link to="/team-details">
                  <img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" />
                </Link>
              </div>
              <div className="agent-brief go-top">
                <h6>
                  <Link to="/team-details">William Seklo</Link>
                </h6>
                <small>Estate Agents</small>
              </div>
            </div>
            <div className="product-hover-action">
              <ul>
                <li className="dialer">
                  <a
                    // style={{ borderRadius: 50 }}
                    href="tel:+923313388811"
                  >
                    <i class="fa-solid fa-phone-volume"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetroCityCards;
