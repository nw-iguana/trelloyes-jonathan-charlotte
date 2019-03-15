import React from 'react';
import './Card.css';

function Card(props) {
    console.log(props);

    return(
        <div className="List-cards">
            {props.props.map((item, index) =>
                <div key={index} className="Card">
                    <h3>{item}</h3>
                    <p>sldkjflskdjf</p>
                </div>
            )}
        </div>
    );
}

export default Card;