import React from 'react';
import './Card.css';

function Card(props) {
    // console.log('Card props', props);

    return(
        <div className="List-cards">
                <div className="Card">
                    <h3>{props.cardTitle}</h3>
                    <p>{props.cardContent}</p>

                    <div className="button">
                        <button>delete</button>
                    </div>
                </div>
        </div>
    );
}

export default Card;