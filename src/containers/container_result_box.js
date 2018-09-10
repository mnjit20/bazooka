import React, { Component } from "react";
import { CreatorBox, ReachBox } from "../components/layout/creatorBox";
import { fetchCreators, fetchStates } from "../reducers/dashboard";
import CreatorList from "../components/layout/creatorlist";
import { connect } from "react-redux";

class ResultBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 1
    };
  }

  update() {
    this.setState({
      timer: this.state.timer + 1
    });
  }

  componentDidMount() {
    this.props.fetchCreators();
    this.props.fetchStates();

    // setInterval(() => {
    //   console.log("inside time interval");

    //   // this.setState({
    //   //   timer: this.
    //   // });
    //   this.update();
    // }, 5000);
  }

  render() {
    return (
      <div className="midBox">
        <CreatorBox />
        <ReachBox />

        <div className="inflBox">
          <div className="clear" />
          <CreatorList creators={this.props.creators} time={this.state.timer} />
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
