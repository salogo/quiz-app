import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button, Badge } from 'react-bootstrap';

const Cards = ({
  image, topic, description, id, createdAt,
}) => {
  const promote = new Date(createdAt).getDate();
  return (
    <div style={{ padding: 15 }} key={id}>
      <Card border='info'>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title width='100%'>
            {topic}
            {' '}
            {promote > 7 && (
            <Badge variant='danger' className='animated heartBeat delay-6s'>
    New
            </Badge>
            )}
          </Card.Title>
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
    </div>
  );
};

export default Cards;
