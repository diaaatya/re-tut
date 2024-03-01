import React from 'react';
import './HomeScreen.css'; // Import CSS for styling

const HomeScreen = () => {
  return (
    <div className="home-screen">
      {/* Background */}
      <div className="background"></div>

      {/* Content */}
      <div className="content">
        <h1>Welcome to Your Journey</h1>
      </div>

      {/* Button */}
      <a href='#diaa'>
      <button  className="start-button">Choose Your Path</button>
      </a>
    </div>
  );
};

export default HomeScreen;
