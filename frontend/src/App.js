// frontend/src/App.js
import React from 'react';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';

function App() {
  return (
    <div>
      <h1>Flashcard PRO</h1>
      <FlashcardForm />
      <FlashcardList />
    </div>
  );
}

export default App;
