import React from 'react';
import { Container } from 'react-bootstrap';

import CardList from '@Components/CardList';
import Quiz from '@/test/Topics';
import 'animate.css/animate.css';

const Home = () => (
  <Container key='Home'>
    <CardList Cards={Quiz} key='CardList' />
  </Container>
);

export default Home;
