import React, { Component } from "react";
import { Link } from "react-router-dom";

class Creator extends Component {
  render() {
    return (
      <div className="inflBox">
        <div className="clear" />

        <div className="box ">
          <div className="detail">
            <div className="image">
              <a href="/influencer/519">
                <img
                  src="https://yt3.ggpht.com/-_8lHSPO3nNI/AAAAAAAAAAI/AAAAAAAAAAA/-THVRONaQco/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                  className=""
                />
                <img src="http://aspire.firstwall.com/assets/images/profilepic.png" />
              </a>
            </div>
            <span className="title">
              <a href="/influencer/519" className="">
                FailArmy
              </a>
            </span>
            <span className="type ">Entertainment</span>
            <span className="loc ">Chandigarh</span>
          </div>
          <div className="socail">
            <span>Social Platform</span>
            <ul>
              <li className="">
                <a className="youtube" href="">
                  Youtube
                </a>
              </li>
              <li className="">
                <a className="facebook" href="">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="total">
            <span className="">31M</span>
            Total Reach
          </div>
          <a className="view" href="/influencer/519">
            View Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Creator;
