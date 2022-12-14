import React from 'react';
import { Button } from './Button';

import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
     
      <h1>Go Endlessly</h1>
      <p>Ready to explore?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
