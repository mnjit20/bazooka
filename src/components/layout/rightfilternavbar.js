import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { Link } from 'react-router-dom';

class RightFilterNavBar extends Component {
  componentDidMount() {
    //    const states = this.props.states;
    console.log("-----data is", this.props.states);
  }
  render() {
    return (
      <div className="rightBox">
        <div className="filterBox">
          <form className="">
            <div className="fields cat_names" />

            <div className="fields">
              <div className="dropdown">
                <div className="language_box">
                  <a href="javascript:void(0)">
                    <span>Category</span>
                    <p className="multiSel" />
                  </a>
                </div>

                <div className="language_channel">
                  <div className="mutliSelect">
                    <ul>
                      <li>
                        <label id="catdiv-39">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="39"
                            id="chkbox_39"
                          />
                          <span className="ng-binding">Animation</span>
                        </label>
                        <label id="catdiv-3">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="3"
                            id="chkbox_3"
                          />
                          <span className="ng-binding">Auto</span>
                        </label>
                        <label id="catdiv-6">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="6"
                            id="chkbox_6"
                          />
                          <span className="ng-binding">Business</span>
                        </label>
                        <label id="catdiv-11">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="11"
                            id="chkbox_11"
                          />
                          <span className="ng-binding">Edu &amp; Jobs</span>
                        </label>
                        <label id="catdiv-2">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="2"
                            id="chkbox_2"
                          />
                          <span className="ng-binding">Entertainment</span>
                        </label>
                        <label id="catdiv-37">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="37"
                            id="chkbox_37"
                          />
                          <span className="ng-binding">Fiction</span>
                        </label>
                        <label id="catdiv-12">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="12"
                            id="chkbox_12"
                          />
                          <span className="ng-binding">Food</span>
                        </label>
                        <label id="catdiv-15">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="15"
                            id="chkbox_15"
                          />
                          <span className="ng-binding">Health</span>
                        </label>
                        <label id="catdiv-9">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="9"
                            id="chkbox_9"
                          />
                          <span className="ng-binding">Humour</span>
                        </label>
                        <label id="catdiv-13">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="13"
                            id="chkbox_13"
                          />
                          <span className="ng-binding">Lifestyle</span>
                        </label>
                        <label id="catdiv-24">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="24"
                            id="chkbox_24"
                          />
                          <span className="ng-binding">Miscellaneous</span>
                        </label>
                        <label id="catdiv-31">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="31"
                            id="chkbox_31"
                          />
                          <span className="ng-binding">Music</span>
                        </label>
                        <label id="catdiv-38">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="38"
                            id="chkbox_38"
                          />
                          <span className="ng-binding">Non-Fiction</span>
                        </label>
                        <label id="catdiv-35">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="35"
                            id="chkbox_35"
                          />
                          <span className="ng-binding">Offbeat</span>
                        </label>
                        <label id="catdiv-4">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="4"
                            id="chkbox_4"
                          />
                          <span className="ng-binding">Politics</span>
                        </label>
                        <label id="catdiv-14">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="14"
                            id="chkbox_14"
                          />
                          <span className="ng-binding">Religion</span>
                        </label>
                        <label id="catdiv-1">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="1"
                            id="chkbox_1"
                          />
                          <span className="ng-binding">Sports</span>
                        </label>
                        <label id="catdiv-18">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="18"
                            id="chkbox_18"
                          />
                          <span className="ng-binding">Tech</span>
                        </label>
                        <label id="catdiv-22">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="22"
                            id="chkbox_22"
                          />
                          <span className="ng-binding">Technology</span>
                        </label>
                        <label id="catdiv-40">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="40"
                            id="chkbox_40"
                          />
                          <span className="ng-binding">Tips &amp; Tricks</span>
                        </label>
                        <label id="catdiv-19">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="19"
                            id="chkbox_19"
                          />
                          <span className="ng-binding">Top News</span>
                        </label>
                        <label id="catdiv-5">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="5"
                            id="chkbox_5"
                          />
                          <span className="ng-binding">Travel</span>
                        </label>
                        <label id="catdiv-0">
                          <input
                            name="cat_ids_arr[]"
                            type="checkbox"
                            value="0"
                            id="chkbox_0"
                          />
                          <span className="ng-binding">Unknown</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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
                    key={stateObj.id}
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
