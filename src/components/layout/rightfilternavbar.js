import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import { Link } from 'react-router-dom';

class RightFilterNavBar extends Component {
  componentDidMount() {}
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
                <li>
                  <label>Youtube</label>{" "}
                  <input type="checkbox" value="1" name="socialsorting[]" />
                </li>
                <li>
                  <label>Facebook</label>
                  <input type="checkbox" value="2" name="socialsorting[]" />
                </li>
                <li>
                  <label>Instagram</label>
                  <input type="checkbox" value="3" name="socialsorting[]" />
                </li>
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
