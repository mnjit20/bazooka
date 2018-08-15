import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreatorList from "./creatorlist";
import { connect } from "react-redux";

class Creator extends Component {
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
const connectedCreator = connect(mapStateToProps)(Creator);
export default connectedCreator;

//export default Creator;
