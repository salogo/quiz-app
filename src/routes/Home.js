import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CardList from '@Components/CardList';
import Quiz from 'quiz';
import 'animate.css/animate.css';


const Home = () => (
  <Container>
    <Row>
      <Col xs={{ number: 12, offset: 0 }} md={{ number: 12, offset: 0 }}>
        <CardList Cards={Quiz} />
      </Col>
    </Row>
  </Container>
);

export default Home;
