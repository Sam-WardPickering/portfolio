import React from 'react'
import upwardArrow from '../icons/upwardarrow.gif'
import { useEffect, useState } from 'react';

export default function Footer() {
    // hide button at beginning of page
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div>
    <footer>
      <p className="copy">&copy; Copyright 2021</p>
      <p className="copy">
        Built by Sam Ward-Pickering
      </p>
      {showButton && (
      <i className="scroll-up" id="scroll-up"
      ><img
        src={upwardArrow}
        className="socicon up-arrow"
        alt="scroll-up"
        onClick={scrollToTop}
    /></i>
    )}
    </footer>
    
    </div>
  )
}
