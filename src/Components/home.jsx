/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/web.css';

const featureItems = [
  {
    label: 'Know Your Weather',
    to: '/weather',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        <circle cx="12" cy="12" r="5"/>
      </svg>
    ),
  },
  {
    label: 'Loans & Subsidies',
    to: '/services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    label: 'Fresh Produce Marketplace',
    to: '/consumer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <main id="main-content">
      <section className="home-hero" aria-label="Hero section">
        <div className="home-hero-bg" aria-hidden="true" />

        {/* Left: Hero text */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div className="home-hero-content">
            <p className="home-hero-eyebrow">Farm Buddy Platform</p>
            <h1 className="home-hero-title">
              From the Field<br />
              <em>to Your Table</em>
            </h1>
            <blockquote className="home-hero-quote">
              <span lang="ta">விதைப்பவனே விலையை தகுதியிடுபவன்</span>
              <br />
              The one who seeds determines the price
            </blockquote>
            <p className="home-hero-desc">
              A direct bridge connecting farmers and consumers — enabling fair prices,
              fresh produce, and a transparent agricultural marketplace.
            </p>
            <div className="home-hero-actions">
              <Link to="/signup" className="btn-primary">
                Join Us Today
              </Link>
              <Link to="/signin" className="btn-outline">
                Sign In
              </Link>
            </div>
          </div>

          {/* Right: Feature card */}
          <div className="home-features-card" style={{ minWidth: '240px', flex: '0 1 300px' }}>
            <h2 className="home-features-title">Explore Features</h2>
            <nav aria-label="Quick feature navigation">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {featureItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="home-feature-item">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;