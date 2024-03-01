import React, { useState, useEffect } from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className={isNavVisible ? 'navbar' : 'navbar hidden'}>
      <div className="navbar-logo">Your Logo</div>
      <ul className="navbar-nav">
        <li className="navbar-link"><Link to="/">Home</Link></li>
        <li className="navbar-link"><a href="#about">About Me</a></li>
        <li className="navbar-link"><a href="#contact">Contact Us</a></li>
        <li className="navbar-link"><a href="#articles">Articles</a></li>
        <li className="navbar-link"><Link to="/classroom">Classroom</Link></li>
      </ul>
      <SearchBar/>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faGear} style={{color: "#FFD43B"}} />   
        <i className="fa fa-cog navbar-icon"></i>
      </div>

      {/* Button to trigger the modal */}
      <button onClick={openModal}>Login/Sign Up</button>

      {/* Login/Sign Up Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Login/Sign Up</h2>
          <form  className='formss'>
            
            <input type="text"  placeholder='User name' />

          
            <input type="password" placeholder='password' />

            <a href="#forgotpassword">Forgot Password?</a>
            <button type="submit">Login</button>
          </form>
          <div>
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
