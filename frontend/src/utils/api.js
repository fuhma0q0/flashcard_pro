import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const getRandomFlashcards = async () => {
  try {
    const response = await axios.get(`${API_URL}flashcards/random/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random flashcards:', error);
    return [];
  }
};
