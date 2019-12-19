import React from 'react';
import { Alert } from 'react-bootstrap';
import Animate from 'animate.css-react';

const Signin = () => (

  <Animate
    enter='fadeIn'
    leave='slideOutDown'
    appear='fadeIn'
    change='shake'
    durationAppear={1000}
    durationEnter={1000}
    durationLeave={1000}
    durationChange={1000}
  >
    {
      ['warning'].map((variant) => (
        <Alert key={variant} variant={variant}>
          <h1 style={{ textAlign: 'center' }}>Sigin Page</h1>
        </Alert>
      ))
    }
  </Animate>
);


export default Signin;
