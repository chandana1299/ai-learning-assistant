import axios from 'axios';

const API_URL = "http://localhost:8000";

export const getRecommendations = async (topic) => {
    const response = await axios.get(`${API_URL}/recommendations/${topic}`);
    return response.data.recommendations;
};

export const getQuiz = async (topic) => {
    const response = await axios.get(`${API_URL}/generate-quiz/${topic}`);
    return response.data.quiz;
};

export const saveProgress = async (userId, topic, score) => {
    await axios.post(`${API_URL}/save-progress`, { user_id: userId, topic, score });
};
