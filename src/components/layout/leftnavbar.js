import React, { Component } from "react";
//import { Link } from "react-router-dom";

class LeftNavBar extends Component {
  render() {
    return (
      <div className="leftBox">
        <ul>
          <li className="submenu active">
            <a className="dashboard" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="submenu">
            <a className="project" href="">
              Projects
            </a>
            <ul>
              <li>
                <a href="/addProject">Add New</a>
              </li>
              <li>
                <a href="/projectList">Ongoing</a>
              </li>

              <li>
                <a href="/completedProjectList">Completed</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a className="partner" href="">
              Partner
            </a>
            <ul>
              <li>
                <a href="/creators-list">Creators</a>
              </li>
              <li>
                <a href="/influencers-list">Influencers</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftNavBar;
