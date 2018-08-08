import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RightFilterNavBar extends Component {
  render() {
    return (
      <div className="rightBox ng-scope">
        <div className="filterBox">
          <form className="">
            <div className="fields cat_names"></div>
            <div className="fields">
              <div className="dropdown">
                <div className="language_box">
                  <a href="javascript:void(0)">
                    <span>Category</span>
                    <p className="multiSel"></p>
                  </a>
                </div>
                <div className="language_channel">
                  <div className="mutliSelect">
                    <ul>
                      <li>
                        <label id="catdiv-39">
                          <input name="cat_ids_arr[]" type="checkbox" value="39" id="chkbox_39" />
                          <span className="">Animation</span>
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
                <li><label>Youtube</label><input type="checkbox" value="1" name="socialsorting[]" /></li>
                <li><label>Facebook</label><input type="checkbox" value="2" name="socialsorting[]" /></li>
                <li><label>Instagram</label><input type="checkbox" value="3" name="socialsorting[]" /></li>
              </ul>

            </div>
            <div className="fields rangeSlider">
              <h2>Reach</h2>
              <p><input type="hidden" /></p>
              <p><input type="hidden" /></p>
              <div className="slider horizontal"><div className="range" ></div><a className="handle min" ></a><a className="handle max" ></a></div>
              <span className="">0 &nbsp;-&nbsp; 9000000</span>
            </div>

            <div className="fields">
              <select ng-model="state" name="state" className=""><option label="All" value="string:All">All</option><option label="Andaman and Nico.In." value="string:Andaman and Nico.In.">Andaman and Nico.In.</option><option label="Andhra Pradesh" value="string:Andhra Pradesh">Andhra Pradesh</option><option label="Assam" value="string:Assam">Assam</option><option label="Bihar" value="string:Bihar">Bihar</option><option label="Chandigarh" value="string:Chandigarh">Chandigarh</option><option label="Chhattisgarh" value="string:Chhattisgarh">Chhattisgarh</option><option label="Delhi" value="string:Delhi">Delhi</option><option label="Goa" value="string:Goa">Goa</option><option label="Gujarat" value="string:Gujarat">Gujarat</option><option label="Haryana" value="string:Haryana">Haryana</option><option label="Himachal Pradesh" value="string:Himachal Pradesh">Himachal Pradesh</option><option label="Jharkhand" value="string:Jharkhand">Jharkhand</option><option label="Karnataka" value="string:Karnataka">Karnataka</option><option label="Madhya Pradesh" value="string:Madhya Pradesh">Madhya Pradesh</option><option label="Maharashtra" value="string:Maharashtra">Maharashtra</option><option label="Punjab" value="string:Punjab">Punjab</option><option label="State" value="string:State">State</option><option label="Tamil Nadu" value="string:Tamil Nadu">Tamil Nadu</option><option label="Uttarakhand" value="string:Uttarakhand">Uttarakhand</option><option label="West Bengal" value="string:West Bengal">West Bengal</option></select>
            </div>

            <button type="submit" className="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>)
  }
}

export default RightFilterNavBar;