import React from 'react';
import {
  Container, Row, Col, Alert, Form, Button, InputGroup,
} from 'react-bootstrap';

const Signin = () => (
  <Container>
    <Alert variant='success'>
      <h1 style={{ textAlign: 'center' }}>Signin Page</h1>
    </Alert>
    <Row>
      <Col lg={{ span: 4, offset: 4 }}>
        <Form>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='inputGroupPrependEmail'>
                  <i className='fa fa-user' aria-hidden='true' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='email'
                placeholder='Email Address'
                aria-describedby='inputGroupPrependEmail'
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='inputGroupPrependPassword'>
                  <i className='fa fa-lock' aria-hidden='true' />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='password'
                placeholder='Password'
                aria-describedby='inputGroupPrependPassword'
                required
              />
            </InputGroup>
          </Form.Group>
          <Button variant='success' type='submit'>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

Signin.defaultProps = {
  inProp: false,
};

export default Signin;
