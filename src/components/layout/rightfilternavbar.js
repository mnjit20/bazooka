import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import { Link } from 'react-router-dom';

const socialPlatformFilter = ["youtube", "facebook", "instagram"];

class RightFilterNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialPlatformFilter: {
        youtube: false,
        facebook: false,
        instagram: false
      }
    };

    this.handleSocialPlatformClick = this.handleSocialPlatformClick.bind(this);
  }
  componentDidMount() {}

  handleSocialPlatformClick(event) {
    let currentEvent = event.target.value;
    this.setState({
      socialPlatformFilter: {
        ...this.state.socialPlatformFilter,
        [currentEvent]: !this.state.socialPlatformFilter[currentEvent]
      }
    });

    setTimeout(() => {
      console.log("Social selection:", this.state.socialPlatformFilter);
    }, 200);

    //console.log(this.props);
  }

  render() {
    return (
      <div className="rightBox">
        <div className="filterBox">
          <form className="">
            <div className="fields cat_names" />

            {/*             <div className="fields">
              <div className="dropdown">
                <div className="language_box">
                  <a href="javascript:void(0)">
                    <span>Category</span>
                    <p className="multiSel" />
                  </a>
                </div>

                <div className="language_channel">
                  <div className="mutliSelect">
                    <ul />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="fields plateSelect">
              <h2>Platform</h2>
              <ul>
                {socialPlatformFilter.map(social => (
                  <li key={social}>
                    <label>{social}</label>
                    <input
                      onChange={this.handleSocialPlatformClick}
                      type="checkbox"
                      value={social}
                      name="socialPlatformFilter[]"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="fields rangeSlider">
              <h2>Reach</h2>
              <p>
                <input type="hidden" />
              </p>
              <p>
                <input type="hidden" />
              </p>
              <div className="slider horizontal">
                <div className="range" />
                <a className="handle min" />
                <a className="handle max" />
              </div>
              <span className="">0 &nbsp;-&nbsp; 9000000</span>
            </div>

            <div className="fields">
              <select name="state" className="">
                <option label="All" value="string:All">
                  All
                </option>
                {this.props.states.map(stateObj => (
                  <option
                    key={stateObj._id}
                    label={stateObj.name}
                    value={stateObj.name}>
                    {stateObj.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit" name="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

//export default RightFilterNavBar;

const mapStateToProps = state => state;
const connectedRightFilterNavBar = connect(mapStateToProps)(RightFilterNavBar);
export default connectedRightFilterNavBar;
