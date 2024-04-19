import React from 'react';
import './Card.css';

const Cards = ({ title, price, features, cardNumber }) => {
  const getClassForCard = (cardNumber, index) => {
    if (cardNumber === 1 && index <= 4) {
      return "check";
    } 
    else if (cardNumber === 1 && index >4 ) {
        return "cross";
    }
     else if (cardNumber === 2 && index < 7) {
      return "check";
    } else if (cardNumber === 2 && index === 7) {
      return "cross";
    } else if (cardNumber === 3) {
      return "check";
    } else {
      return "";
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <p>{title}</p>
        <h1>{price}</h1>
      </div>
      <div className="card-body">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={getClassForCard(cardNumber, index)}>
              {getClassForCard(cardNumber, index) === "check" ? (
                <i className="fa fa-check"></i>
              ) : (
                <i className="fa fa-times"></i>
              )}
              {feature}
            </li>
          ))}
        </ul>
        <button className="button">Button</button>
      </div>
    </div>
  );
};

export default Cards;
