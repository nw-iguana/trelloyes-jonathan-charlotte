import React from 'react';
import './List.css';
import Card from './Card';


function List(props) {
    return (
        <div className="App-list">
            {
                props.props.lists.map((card) => 
                <section className="List">
                    <header className="List-header" key={card.id}>
                        <h2>{card.header}</h2>
                    </header>
                    <Card props={card.cardIds} />
                </section>
                )
            }
        </div>
    );
}

export default List;