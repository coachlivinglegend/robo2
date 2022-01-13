import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
  console.log('CardList');

  return (
    <div>
      {robots.map(({ name, email }, idx) => (
        <Card key={idx} name={name} email={email} id={idx} />
      ))}
    </div>
  );
};

export default CardList;
