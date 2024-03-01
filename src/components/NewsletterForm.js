import React, { useState } from 'react';
import './NewsletterForm.css'; // Import CSS file for styling

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [step, setStep] = useState(1);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    setStep(2);
  };

  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setNameError('Please enter your first and last name.');
      return;
    }

    setNameError('');
    const formData = {
      email,
      firstName,
      lastName
    };

    console.log(formData); // Just for demonstration, you'll send this to your backend

    setStep(3);
  };

  return (
    <div className="newsletter-form">
      <form className={step === 1 ? '' : 'hidden'}>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <button type="button" onClick={validateEmail}>Next</button>
      </form>

      <form className={step === 2 ? '' : 'hidden'}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {nameError && <p className="error-message">{nameError}</p>}
        <button type="button" onClick={handleSubmit}>Join</button>
      </form>

      <div className={step === 3 ? 'success-message' : 'hidden'}>
        Thank you for subscribing!
      </div>
    </div>
  );
};

export default NewsletterForm;
