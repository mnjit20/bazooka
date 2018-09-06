import React from "react";

const CreatorBox = () => {
  return (
    <div className="">
      <h2>Creators</h2>

      <div className="formSearch">
        <select className="inf">
          <option value="? string: ?" />
          <option value="100" selected="selected">
            100
          </option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="1500">1500</option>
          <option value="2000">2000</option>
          <option value="2000">5000</option>
        </select>
      </div>
      <div className="clear" />
    </div>
  );
};
const ReachBox = () => {
  return (
    <div className="infreach">
      <div className="clear" />

      <div className="inf iboxes">
        <div className="text">
          <span className="">18.6K</span>
          Creators
        </div>
      </div>
      <div className="reach iboxes">
        <div className="text">
          <span className="">392M</span>
          Reach
        </div>
        <ul>
          <li>
            <span className="youtube">229M</span>
          </li>
          <li>
            <span className="facebook">163M</span>
          </li>
          <li>
            <span className="insta">0</span>
          </li>
        </ul>
      </div>
      <div className="clear" />
    </div>
  );
};

export { CreatorBox, ReachBox };
