import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button } from 'react-bootstrap';

const Cards = ({
  image, topic, description, id,
}) => (
  <Card border='info'>
    <Card.Img
      variant='top'
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
      }}
      src={image}
    />
    <Card.Body>
      <Card.Title>{topic}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <LinkContainer to={`/quiz/${topic.toLowerCase()}`}>
        <Button variant='primary' href='#play'>
            Play
          {' '}
          {id}
        </Button>
      </LinkContainer>
    </Card.Body>
  </Card>
);

export default Cards;
