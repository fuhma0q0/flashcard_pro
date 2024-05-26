// frontend/src/components/FlashcardList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function fetchFlashcards() {
      const response = await axios.get('http://localhost:8000/api/flashcards/');
      setFlashcards(response.data);
    }
    fetchFlashcards();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/flashcards/${id}/`);
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  return (
    <div>
      <h2>Flashcard List</h2>
      <ul>
        {flashcards.map(card => (
          <li key={card.id}>
            <strong>Question:</strong> {card.question}<br />
            <strong>Answer:</strong> {card.answer}
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlashcardList;
