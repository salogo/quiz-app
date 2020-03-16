import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button, Badge } from 'react-bootstrap';

const Cards = ({
  image, topic, description, id, createdAt, visitor, topScore, index, count,
}) => {
  const promote = new Date(createdAt).getDate();
  return (
    <div style={{ padding: 10 }} key={id}>
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
          <div className='d-flex justify-content-between'>
            <LinkContainer to={`/topic/${topic.toLowerCase()}`}>
              <Button variant='primary' name='visitor' id={index} onClick={count}>
                Play
              </Button>
            </LinkContainer>
            <div className='d-flex justify-content-end'>
              <small className='p-2 text-muted'>
                <i className='fa fa-user' aria-hidden='true' />
                {' '}
                {visitor}
              </small>
              <small className='p-2 text-muted'>
                <i className='fa fa-star' aria-hidden='true' />
                {' '}
                {topScore}
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

Cards.defaultProps = {
  id: 1,
  image: 'image',
  topic: 'topic',
  description: 'description',
  createdAt: new Date(),
  visitor: 20,
  topScore: 100,
  index: 1,
  count: () => {},
};

Cards.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  topic: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
  visitor: PropTypes.number,
  topScore: PropTypes.number,
  index: PropTypes.number,
  count: PropTypes.func,
};

export default Cards;
