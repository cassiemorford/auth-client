import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <h3>You see a feature! You are logged in!</h3>;
  }
}

export default requireAuth(Feature);
