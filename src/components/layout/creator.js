import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreatorList from "./creatorlist";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCreators, fetchStates } from "../../reducers/dashboard";

class Creator extends Component {
  componentDidMount() {
    this.props.fetchCreators();
    this.props.fetchStates();
  }

  render() {
    console.log("creator-component", this.props);
    console.log("creator-component", this.props);
    return (
      <div className="inflBox">
        <div className="clear" />
        <CreatorList creators={this.props.creators} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const connectedCreator = connect(
  mapStateToProps,
  { fetchCreators, fetchStates }
)(Creator);
export default connectedCreator;
