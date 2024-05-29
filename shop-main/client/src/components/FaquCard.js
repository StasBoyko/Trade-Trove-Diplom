import React from 'react';
import './UI/cards.css';

const FaqCard = ({props}) => {

  return (
    <div className="faqcard">
          <h3 className='faqcardh3'>{props.question}</h3>
          <p className='faqcardP'>{props.answer}</p>
    </div>
    );
};

export default FaqCard;
