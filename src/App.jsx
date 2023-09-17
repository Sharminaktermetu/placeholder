import React, { useState, useEffect } from 'react';
import './App.css';

import {FaFacebook,FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const App = () => {
  const initialCountdown = parseInt(localStorage.getItem('countdown')) || 4 * 24 * 60 * 60; // 4 days in seconds
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
      localStorage.setItem('countdown', countdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div className="countdown-timer">
      <div className="icon-links">
      <a href="https://www.facebook.com">
        <FaFacebook className="icon" />
      </a>
      <a href="https://web.whatsapp.com">
        <FaWhatsapp className="icon" />
      </a>
      <a href="tel:+1234567890">
        <FaLinkedin className="icon" />
      </a>
    </div>
      <h2 className='text-white text-3xl font-bold text-center pb-6 uppercase'>Website Coming soon</h2>
      <div className="timer text-white flex justify-center items-center top-48">
        <div className="time-box-container font-semibold">
          <div className="time-box">
            <span>{days < 10 ? `0${days}` : days}</span>
            <span>Days</span>
          </div>
          <div className="time-box">
            <span>{hours < 10 ? `0${hours}` : hours}</span>
            <span>Hours</span>
          </div>
          <div className="time-box">
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="time-box">
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="sign-up-button">
        <button className="bg-gradient-to-r from-indigo-500 to-pink-400 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default App;
