import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div className='header'>
        <Link to='/'>Redux Auth</Link>
        {!authenticated && <Link to='/signup'>Sign Up </Link>}
        {!authenticated && <Link to='/signin'>Sign In</Link>}
        {!!authenticated && <Link to='/signout'>Sign Out</Link>}
        {!!authenticated && <Link to='/feature'>Feature</Link>}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });

export default connect(mapStateToProps)(Header);
