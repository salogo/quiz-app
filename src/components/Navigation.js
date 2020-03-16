import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar
    collapseOnSelect
    expand='lg'
    fixed='top'
    bg='dark'
    variant='dark'
  >
    <LinkContainer to='/'>
      <Navbar.Brand>Quiz</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto' />
      <Nav>
        <LinkContainer to='/authenticate' activeClassName='active'>
          <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
