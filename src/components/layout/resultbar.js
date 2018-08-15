import React, { Component } from "react";
import { Link } from "react-router-dom";
import Creator from "./creator";
import { CreatorBox, ReachBox } from "../dashboard/creatorBox";

class ResultBar extends Component {
  render() {
    return (
      <div className="midBox">
        {/* <CreatorBox />
        <ReachBox /> */}

        <Creator />
      </div>
    );
  }
}

export default ResultBar;
