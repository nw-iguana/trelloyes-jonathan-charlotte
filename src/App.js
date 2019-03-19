import React from 'react';
import './App.css';
import List from './List';

function App(data) {
  let {lists, allCards} = data.data;

  // console.log('App props', lists, allCards);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      {
        lists.map((list) =>
          <List
            key={list.id}
            id={list.id}
            header={list.header}
            cardIds={list.cardIds}
            cardsInfo={allCards} />
        )
      } 

    </main>
  )
}

export default App;