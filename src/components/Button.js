import React from 'react';
import { useState } from 'react';
import './Button.css'; // Import CSS file for styling
import { GrLinkNext } from "react-icons/gr";


const Button = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <button
      className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <span className="icon"><GrLinkNext/></span>
      Button Text
    </button>
  );
};

export default Button;
