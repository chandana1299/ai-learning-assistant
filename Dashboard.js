import React, { useState } from "react";
import { getRecommendations } from "./api";

const Dashboard = () => {
  const [topic, setTopic] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = async () => {
    const data = await getRecommendations(topic);
    setRecommendations(data);
  };

  return (
    <div className="container">
      <h1>AI-Powered Learning Assistant</h1>
      <input 
        type="text" 
        placeholder="Enter a topic..." 
        value={topic} 
        onChange={(e) => setTopic(e.target.value)} 
      />
      <button onClick={handleSearch}>Get Recommendations</button>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
