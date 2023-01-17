import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Social extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com/asfandyar.khan.355138" title="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/filestraders" title="Twitter">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/noorkhan8755/" title="Instagram">
              <i className="fab fa-instagram" />
            </a>
          </li>
          {/* <li><a href="https://www.dribble.com/tuna-theme" title="Dribbble"><i className="fab fa-dribbble" /></a></li> */}
        </ul>
      </div>
    );
  }
}

export default Social;
