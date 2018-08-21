import React, { Component } from "react";
//import { Link } from 'react-router-dom';

class TopNavbar extends Component {
  render() {
    return (
      <div className="topBox">
        <div className="leftTop">
          <span className="btn" />
          <span className="logo">
            <a href="http://aspire.firstwall.com/dashboard/">
              <img src="http://aspire.firstwall.com/assets/images/logo.png" />
            </a>
          </span>
        </div>

        <div className="rightTop">
          <ul>
            <li>
              <span className="user">
                <img src="http://aspire.firstwall.com/assets/images/user.png" />
              </span>
            </li>
            <li>
              <a className="bell" href="">
                bell
              </a>
            </li>
            <li>
              <a className="setting" href="">
                setting
              </a>
            </li>
            <li>
              <a
                target="_self"
                className="logout"
                href="http://aspire.firstwall.com/logout/">
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopNavbar;
