import React, { useState, useEffect } from 'react';
import { getRandomFlashcards } from '../utils/api';

function Quiz() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function fetchRandomFlashcards() {
      const randomFlashcards = await getRandomFlashcards();
      setFlashcards(randomFlashcards);
    }
    fetchRandomFlashcards();
  }, []);

  return (
    <div>
      <h2>Quiz</h2>
      <ul>
        {flashcards.map(card => (
          <li key={card.id}>
            <strong>Question:</strong> {card.question}<br />
            <strong>Answer:</strong> {card.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
