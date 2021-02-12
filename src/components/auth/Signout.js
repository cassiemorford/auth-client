import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout(() => {
      this.props.history.push('/feature');
    });
  }

  render() {
    return <div>See you soon!</div>;
  }
}

export default connect(null, actions)(Signout);