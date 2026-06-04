import React from 'react';

/**
 * Newsletter Component
 * Renders a newsletter subscription section at the bottom of the landing page.
 * Includes orange wavy line accents on the top-left, a purple semicircle design on the right,
 * and a simple call-to-action form (header, description text, and subscribe button).
 */
export default function Newsletter() {
  return (
    <section className="newsletter-section">
      {/* Three orange wavy accent lines on the top-left */}
      <div className="newsletter-waves">
        <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 5 C 12 0, 17 10, 27 5 C 37 0, 42 10, 48 5" stroke="#FF4C25" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 2 15 C 12 10, 17 20, 27 15 C 37 10, 42 20, 48 15" stroke="#FF4C25" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 2 25 C 12 20, 17 30, 27 25 C 37 20, 42 30, 48 25" stroke="#FF4C25" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative rotated purple semicircle on the right side of the section */}
      <div className="purple-semi-newsletter"></div>

      {/* Subscription Headline */}
      <h2>Subscribe to <br /> our newsletter</h2>
      
      {/* Subtext description with a relative layout to sit on top of background shapes */}
      <p style={{ position: 'relative', zIndex: 1 }}>To make your stay special and even more memorable</p>
      
      {/* Action button */}
      <button className="subscribe-btn" style={{ position: 'relative', zIndex: 1 }}>Subscribe Now</button>
    </section>
  );
}