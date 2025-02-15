import React, { useState } from "react";
import { getQuiz, saveProgress } from "./api";

const Quiz = ({ user }) => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(null);

  const handleGenerateQuiz = async () => {
    const data = await getQuiz(topic);
    setQuiz(data);
  };

  const handleSubmit = () => {
    const userScore = Math.floor(Math.random() * 100); // Simulate a score
    setScore(userScore);
    saveProgress(user.uid, topic, userScore);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <input 
        type="text" 
        placeholder="Enter topic for quiz..." 
        value={topic} 
        onChange={(e) => setTopic(e.target.value)} 
      />
      <button onClick={handleGenerateQuiz}>Generate Quiz</button>
      <ul>
        {quiz.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Quiz</button>
      {score !== null && <h2>Your Score: {score}</h2>}
    </div>
  );
};

export default Quiz;
