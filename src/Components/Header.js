import React, { Component } from "react";
import classNames from "classnames";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const toggleClass = classNames("dropdown-menu", {
      show: this.state.dropdownOpen
    });
    return (
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col p-2">Enterprise Reporting</div>
          <div className="col p-2">
            <div className="dropdown show float-right username-container">
              <a
                className="btn bg-light dropdown-toggle username-container__elem"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseOver={(e) => this.toggle(e)}
                onMouseOut={(e) => this.toggle(e)}
              >
                User Name
              </a>
              <div className={toggleClass} aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Account Settings
                </a>
                <a className="dropdown-item" href="#">
                  Feedback
                </a>
                <a className="dropdown-item" href="#">
                  Help Center and FAQ
                </a>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row marquee-block">
          <span>Be SURE your DATA is COMPLETE before exporting </span>
        </div>
      </div>
    );
  }
}

export default Header;
