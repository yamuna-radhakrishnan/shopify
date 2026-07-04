import React from 'react';
import '../Styles/web.css';

const Nothing = () => {
  return (
    <main id="main-content" className="empty-state" style={{ paddingTop: '100px' }}>
      {/* Cart icon */}
      <svg
        className="empty-state-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <h1 className="empty-state-title">Your cart is empty</h1>
      <p className="empty-state-text">
        Browse our fresh produce and add items to your cart to get started.
      </p>
      <a href="/consumer" className="btn-primary" style={{ marginTop: '1rem' }}>
        Explore Products
      </a>
    </main>
  );
};

export default Nothing;