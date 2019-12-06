import React from "react";
import {Form ,Button } from "react-bootstrap";



const LogIn =()=> {
    return (
       <div>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Sgn-In</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Log In
  </Button>
</Form>

       </div>
    );
  }
  
  export default LogIn;
  