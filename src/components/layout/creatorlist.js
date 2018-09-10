import React, { Component } from "react";
import Creator from "./creator";
import LogProps from "./hoc_logger";
class CreatorList extends Component {
  render() {
    const CreatorWithLogs = LogProps(Creator);
    const creators = this.props.creators;
    console.log(" creators", creators);
    return (
      <div>
        {creators.map(creator => (
          // <div key={creator._id}>
          <CreatorWithLogs data={creator} time={this.props.time} />
        ))}
      </div>
    );
  }
}

export default CreatorList;
