import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // the component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // the component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
