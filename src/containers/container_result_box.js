import React, { Component } from "react";
import { CreatorBox, ReachBox } from "../components/layout/creatorBox";
import { fetchCreators, fetchStates } from "../reducers/dashboard";
import CreatorList from "../components/layout/creatorlist";
import { connect } from "react-redux";

class ResultBar extends Component {
  componentDidMount() {
    this.props.fetchCreators();
    this.props.fetchStates();
  }
  render() {
    return (
      <div className="midBox">
        <CreatorBox />
        <ReachBox />

        <div className="inflBox">
          <div className="clear" />
          <CreatorList creators={this.props.creators} />
        </div>
      </div>
    );
  }
}

//export default ResultBar;

const mapStateToProps = state => state;

const connectedCreator = connect(
  mapStateToProps,
  { fetchCreators, fetchStates }
)(ResultBar);
export default connectedCreator;
