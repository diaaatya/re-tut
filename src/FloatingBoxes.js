import React from 'react';
import './FloatingBoxes.css'; // Import the CSS file with navbar styles

import { GiChemicalDrop } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";



const FloatingBoxes = () => {
  return (
    <div  id='diaa' className="container">
      <div className="box">
        <div className="icon">
            <GiChemicalDrop size={100}/>
        </div>
        <div className="title">Chemical Explorations</div>
        <h6>From Elements to Reactions</h6>
        <button className='button'>Tell me More!</button>
      
      </div>
      <div className="box">
        <div className="icon"><GiSpellBook size={100}/></div>
        <div className="title">Academic Triumph</div>
        <h6>Charting Your Path to Research Recognition</h6>
        <button className='button'>Tell me More!</button>
    

      </div>
      <div className="box">
        <div className="icon"><SiFuturelearn size={100}/></div>
        <div className="title">Path to Success</div>
        <h6>Crafting Your Career Roadmap</h6>
        <button className='button'>Tell me More!</button>
      </div>
    </div>
  );
};

export default FloatingBoxes;
