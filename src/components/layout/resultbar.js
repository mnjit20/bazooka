import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultBar extends Component {
  render() {
    return (

      <div className="midBox ng-scope">

        <div className=""><h2 className="ng-binding">Creators</h2>



          <div className="formSearch">
            <select className="inf ng-pristine ng-valid ng-touched" ><option value="? string: ?"></option>
              <option value="100" selected="selected">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="2000">5000</option>
            </select>

          </div>
        </div>
        <div className="clear"></div>

        <div className="clear"></div>
        <div className="infreach">
          <div className="inf iboxes">
            <div className="text ng-binding">
              <span className="ng-binding">18.6K</span>
              Creators
			</div>

          </div>
          <div className="reach iboxes">
            <div className="text">
              <span className="ng-binding">392M</span>
              Reach
			 </div>
            <ul>
              <li><span className="youtube ng-binding">229M</span></li>
              <li><span className="facebook ng-binding">163M</span></li>
              <li><span className="insta ng-binding">0</span></li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>

        <div className="clear"></div>

      </div>



    )
  }
}

export default ResultBar;