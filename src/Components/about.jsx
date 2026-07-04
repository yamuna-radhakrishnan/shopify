/* eslint-disable no-unused-vars */
import React from 'react';
import '../Styles/web.css';

const About = () => {
  return (
    <main id="main-content" className="about-hero">
      {/* Background */}
      <div className="about-hero-bg" aria-hidden="true" />

      <div className="about-content">
        <p className="about-tag">Our Story</p>
        <h1 className="about-title">Know Your Farmer.<br />Know Your Consumer.</h1>

        <article className="about-body">
          <img
            src="/images/farmer.jpg"
            alt="A farmer working in the field"
            className="about-farmer-img"
            loading="lazy"
            width="220"
            height="180"
          />
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Agriculture is the backbone of India.</strong> India&apos;s economy relies heavily on farming — yet farmers and consumers remain disconnected. We identified this gap and built Farm Buddy to bridge it.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Farm Buddy is a direct marketplace where farmers set their own prices and consumers can explore, compare, and buy fresh produce without middlemen. Each user gets their own portal — a Farmer Portal and a Consumer Portal — enabling transparent price discovery and fair trade.
          </p>
          <p>
            Beyond buying and selling, we provide weather forecasts, government loan information, and subsidies — everything a farmer or consumer needs in one place. Our goal: give farmers a steady income, ensure product quality, and make fresh food accessible to all.
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;