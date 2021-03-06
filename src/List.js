import React from 'react';
import Card from './Card.js';
import './List.css';
 function List(props) {
     const cards = props.cards.map((card, index) =>
        <Card key={index} title={card.title} content={card.content} />);
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cards}
                <button type="button" className="List-add-button">+ Add Random Card</button>
            </div>
        </section>
    );
}
export default List