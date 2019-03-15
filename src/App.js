import React from 'react';
import './App.css';
import List from './List';
// import data from './store';

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <List props={props.props} />
    </main>
  )
}

export default App;