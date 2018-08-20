import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreatorList from "./creatorlist";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCreators, fetchStates } from "../../reducers/dashboard";

class Creator extends Component {
  componentDidMount() {
    fetchCreators();
    fetchStates();
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

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign({}, fetchCreators, fetchStates),
      dispatch
    )
  };
};

const connectedCreator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Creator);
export default connectedCreator;

//export default Creator;
