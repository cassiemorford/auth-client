import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldRedirectToHome();
    }

    componentDidUpdate() {
      this.shouldRedirectToHome();
    }

    shouldRedirectToHome() {
      if (!this.props.authenticated) this.props.history.push('/');
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });

  return connect(mapStateToProps)(ComposedComponent);
};
