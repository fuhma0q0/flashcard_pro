// frontend/src/components/FlashcardForm.js
import React, { useState } from 'react';
import axios from 'axios';

function FlashcardForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const owner = 1;  // ここを実際のユーザーIDに置き換える
    await axios.post('http://localhost:8000/api/flashcards/', { question, answer, owner });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <button type="submit">Create Flashcard</button>
    </form>
  );
}

export default FlashcardForm;
