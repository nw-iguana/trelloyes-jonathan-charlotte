import React from 'react';
import './List.css';
import Card from './Card';

function List({cardIds, cardsInfo, header, id}) {
    // console.log('List props', cardsInfo);

    // let {cardIds, cardsInfo, header, id} = props;

    return (
        <div className="App-list">
            <section className="List">
                <header className="List-header" key={id}>
                    <h2>{header}</h2>
                </header>
                {cardIds.map((card) =>
                // console.log('map console log', card)
                    <Card
                        key={card}
                        cardTitle={cardsInfo[card].title}
                        cardContent={cardsInfo[card].content} />
                )}
            </section>
        </div>
    );
}

export default List;