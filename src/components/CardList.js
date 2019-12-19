import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Animate from 'animate.css-react';
import Card from '@Components/Card/Card';


const CardsList = ({ Cards }) => {
  const CardCount = Cards.length;
  if (CardCount === 0) {
    return <h1 className='text-center'>Quiz is empty</h1>;
  }

  return (
    <Animate
      enter='slideInUp'
      appear='slideInUp'
      durationAppear={1000}
      durationEnter={1000}
    >
      <Row key='CardList Row'>
        {Cards.map((card) => (
          <Col xs={12} md={6} lg={4} key={`CardList Col ${card.id}`}>
            <Card
              key={`Card${card.id}`}
              id={card.id}
              topic={card.topic}
              description={card.description}
              image={card.image}
              createdAt={card.createdAt}
            />
          </Col>
        ))}
      </Row>
    </Animate>
  );
};

export default CardsList;
