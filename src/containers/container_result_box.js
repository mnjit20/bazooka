import React, { Component } from "react";
import Creator from "../components/layout/creator";
import { CreatorBox, ReachBox } from "../components/dashboard/creatorBox";

class ResultBar extends Component {
  render() {
    return (
      <div className="midBox">
        <CreatorBox />
        <ReachBox />
        <Creator />
      </div>
    );
  }
}

export default ResultBar;
