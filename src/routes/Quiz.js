import React from 'react';
import { Alert } from 'react-bootstrap';
import Animate from 'animate.css-react';

const Quiz = () => ['success'].map((variant) => (
  <Animate
    enter='fadeIn'
    leave='slideOutDown'
    appear='fadeIn'
    change='slideInUp'
    durationAppear={1000}
    durationEnter={1000}
    durationLeave={1000}
    durationChange={1000}
  >
    <Alert key={variant} variant={variant}>
      <h1 style={{ textAlign: 'center' }}>Quiz Page</h1>
    </Alert>
  </Animate>
));

export default Quiz;
