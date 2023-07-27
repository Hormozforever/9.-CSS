import shuffle from 'just-shuffle';
import { useState } from 'react';

export default function Cards() {
  const [show, setShow] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(getShuffledCards());

  const showNewDeck = () => {
    if (!show) {
      setShuffledCards(getShuffledCards());
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="cards">
      <button className="cards__button" onClick={showNewDeck}>
        {show ? 'Hide' : 'Show'} Cards
      </button>
      <div className="cards__gamefield">
        {show &&
          shuffledCards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ '--animation-delay': `${index * 0.2}s` }}
            >
              {card}
            </div>
          ))}
      </div>
    </div>
  );
}

function getShuffledCards() {
  const cards = ['♦️', '♥️', '♣️', '♠️'];
  return shuffle(cards);
}
