import React from "react";

/* Higher order component sample */
function LogProps(WrappedComponent) {
  console.log("WrappedComponent");
  return class extends React.Component {
    componentDidMount() {
      console.log("component mounted");
    }
    componentWillReceiveProps(nextProps) {
      console.log("Current props: ", this.props);
      console.log("Next props: ", nextProps);
    }
    constructor(props) {
      super(props);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default LogProps;
