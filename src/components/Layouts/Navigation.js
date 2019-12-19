import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <LinkContainer to='/'>
      <Navbar.Brand>Quiz App</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto' />
      <Nav>
        <LinkContainer to='/signin'>
          <Nav.Link>Sing In</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
