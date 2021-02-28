import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
const MAIN_DIV = {
    marginBottom: '20px'
  }
class Header extends Component {
  
  render() {
    return(
      <Navbar expand="lg" variant="light" bg="light" style={MAIN_DIV}>
      <Nav variant="pills">
      <Nav.Item>
        <Link to='/' style={{padding: '5px'}}>
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/profile' style={{padding: '5px'}}>
          Profile
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/component1' style={{padding: '5px'}}>
          Component 1
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/container1' style={{padding: '5px'}}>
          Container 1
        </Link>
      </Nav.Item>
      
      <Nav.Item>
        <Link to='/form1' style={{padding: '5px'}}>
          Form
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/hooksform' style={{padding: '5px'}}>
          Hooks Form
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/renderlist' style={{padding: '5px'}}>
          Render List
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/privateroute' style={{padding: '5px'}}>
          Private Route
        </Link>
      </Nav.Item>
     
    </Nav>
      </Navbar>
        
    )}
}

function mapStateToProps(state) {
  return {
    is_authenticated: state.auth_reducer.is_authenticated
  }
}

export default connect(mapStateToProps)(Header);
