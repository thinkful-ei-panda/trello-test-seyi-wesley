import React from 'react';
import List from './List.js';
import STORE from './store.js';
import './App.css';


function App(prop) {
  let tempArray = []
  for (let j = 0; j<STORE.lists.length; j++ ){

  let cardArray = []
   for(let i=0; i<STORE.lists[j].cardIds.length; i++) {
    let cardId = STORE.lists[j].cardIds[i];
    cardArray.push(STORE.allCards[cardId])
  }
  const tempVariable = <List key = {STORE.lists[j].id} header = {STORE.lists[j].header} cards = {cardArray}/>
  tempArray.push(tempVariable);
}
  return (
    <main className ='App'>
      <header className='App-header'>
        <h1>Trelloyes!!!!!!</h1>
      </header>
      <div className='App-List'>
      {tempArray}
      </div>
    </main>
  );
}
export default App;