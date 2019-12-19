import React from 'react';
import Animate from 'animate.css-react';
import Card from '@Components/Card';
import { CardDeck } from 'react-bootstrap';

const CardsList = ({ Cards }) => {
  const chunk = (array, size) => array.reduce((card, item, i) => {
    if (i % size === 0) {
      card.push([item]);
    } else {
      card[card.length - 1].push(item);
    }
    return card;
  }, []);

  const CardCount = Cards.length;
  if (CardCount === 0) {
    return <div>Deck is empty</div>;
  }

  const Deck = chunk(Cards, 3);

  return (
    <Animate
      enter='slideInUp'
      leave='slideOutDown'
      appear='slideInUp'
      change='slideInUp'
      durationAppear={1000}
      durationEnter={1000}
      durationLeave={1000}
      durationChange={1000}
    >
      {Deck.map((cards) => (
        <CardDeck key={cards.id} style={{ padding: 20 }}>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              topic={card.topic}
              description={card.description}
              image={card.image}
            />
          ))}
        </CardDeck>
      ))}
    </Animate>
  );
};

export default CardsList;
