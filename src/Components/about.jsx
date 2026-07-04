/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/web.css';
import '../Styles/about.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('farmer');

  return (
    <main id="main-content" className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true" />
        <div className="about-hero-content">
          <span className="about-tag">Empowering Indian Agriculture</span>
          <h1 className="about-title">
            Know Your Farmer.<br />
            <span>Know Your Consumer.</span>
          </h1>
          <p className="about-subtitle">
            Bridging the gap between fertile fields and local doorsteps through direct commerce, transparent pricing, and smart utilities.
          </p>
          <div className="about-hero-scroll">
            <span className="scroll-arrow">↓</span> Discover Our Story
          </div>
        </div>
      </section>

      {/* Story & Narrative Section */}
      <section className="about-narrative">
        <div className="about-narrative-container">
          <div className="about-narrative-media">
            <div className="media-card card-farmer">
              <img
                src="/images/farmer.jpg"
                alt="Farmer working in the field"
                className="about-narrative-img"
                loading="lazy"
              />
              <div className="media-badge">Farmer Portal</div>
            </div>
            <div className="media-card card-consumer">
              <img
                src="/images/women.jpg"
                alt="Fresh produce delivery to consumer"
                className="about-narrative-img"
                loading="lazy"
              />
              <div className="media-badge">Consumer Portal</div>
            </div>
          </div>
          <div className="about-narrative-text">
            <h2>Rooted in Transparency, Grown for Trust</h2>
            <p className="narrative-highlight">
              Agriculture is the backbone of India's economy. Yet, the hard-working farmers and the everyday consumers remain deeply disconnected by layers of middlemen.
            </p>
            <p>
              We identified this structural gap and engineered <strong>Farm Buddy</strong>. We are a direct, decentralized marketplace where farmers gain full agency to set their own prices, and consumers access high-quality, fresh harvest without intermediary markups.
            </p>
            <p>
              By bypassing the middleman, we ensure that farmers retain their hard-earned profits, and consumers purchase at genuine, fair market rates.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="about-stats-section">
        <div className="section-header">
          <span className="section-tag">Platform Impact</span>
          <h2>The Farm Buddy Advantage</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
              </svg>
            </div>
            <div className="stat-number">0%</div>
            <div className="stat-label">Middlemen Involvement</div>
            <p className="stat-desc">Direct negotiations and peer-to-peer trade eliminate agent commissions entirely.</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <line x1="12" y1="4" x2="12" y2="20"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Farmer Price Control</div>
            <p className="stat-desc">Farmers set their own pricing plans based on crop quality and production costs.</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper text-info">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>
            <div className="stat-number">All-in-One</div>
            <div className="stat-label">Smart Agriculture Tools</div>
            <p className="stat-desc">Real-time weather forecasts, localized seed pricing, and government loan/subsidy locators.</p>
          </div>
        </div>
      </section>

      {/* Interactive Portal Switcher */}
      <section className="about-portals-section">
        <div className="section-header">
          <span className="section-tag">Explore Features</span>
          <h2>Tailored Portals for Everyone</h2>
          <p className="section-description">
            Farm Buddy provides dedicated, custom-made spaces for both producers and buyers to meet their specific needs.
          </p>
        </div>

        <div className="portal-switcher-container">
          <div className="switcher-tabs" role="tablist">
            <button
              className={`switcher-tab ${activeTab === 'farmer' ? 'active' : ''}`}
              onClick={() => setActiveTab('farmer')}
              role="tab"
              aria-selected={activeTab === 'farmer'}
              aria-controls="farmer-portal-panel"
              id="farmer-tab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              For Farmers
            </button>
            <button
              className={`switcher-tab ${activeTab === 'consumer' ? 'active' : ''}`}
              onClick={() => setActiveTab('consumer')}
              role="tab"
              aria-selected={activeTab === 'consumer'}
              aria-controls="consumer-portal-panel"
              id="consumer-tab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-icon">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              For Consumers
            </button>
          </div>

          <div className="portal-panels">
            {activeTab === 'farmer' && (
              <div
                className="portal-panel animated fadeIn"
                id="farmer-portal-panel"
                role="tabpanel"
                aria-labelledby="farmer-tab"
              >
                <div className="panel-content">
                  <h3>Equipping Farmers with Digital Agency</h3>
                  <p>
                    Farmers are at the heart of our community. We built the Farmer Portal to serve as a comprehensive dashboard where producers transition from passive suppliers to active price-makers.
                  </p>
                  <ul className="panel-list">
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Price Customization:</strong> Define your own market prices per unit based on harvest quality, skipping wholesale agent price caps.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Direct Invoicing:</strong> Get paid directly by consumers, keeping 100% of the proceeds.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Weather Forecasting:</strong> Live local weather updates to make timely decisions on planting and harvesting.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Loans & Subsidies:</strong> Filter and apply for federal and state agricultural loans and subsidy schemes directly from the portal.
                    </li>
                  </ul>
                  <div className="panel-actions">
                    <Link to="/farmer" className="btn-primary">Go to Farmer Portal</Link>
                  </div>
                </div>
                <div className="panel-visual">
                  <div className="visual-glass-card">
                    <div className="glass-header">
                      <div className="glass-dot dot-red"></div>
                      <div className="glass-dot dot-yellow"></div>
                      <div className="glass-dot dot-green"></div>
                      <span className="glass-title">Farmer Dashboard Preview</span>
                    </div>
                    <div className="glass-body">
                      <div className="preview-stat-row">
                        <div className="preview-mini-card">
                          <span className="mini-label">Total Earnings</span>
                          <span className="mini-value">₹48,250</span>
                        </div>
                        <div className="preview-mini-card">
                          <span className="mini-label">Active Crops</span>
                          <span className="mini-value">4 Listings</span>
                        </div>
                      </div>
                      <div className="preview-list-item">
                        <span className="item-dot green"></span>
                        <div className="item-info">
                          <span className="item-name">Organic Wheat (Premium)</span>
                          <span className="item-sub">₹45 / Kg</span>
                        </div>
                        <span className="item-status success">Listed</span>
                      </div>
                      <div className="preview-list-item">
                        <span className="item-dot green"></span>
                        <div className="item-info">
                          <span className="item-name">Basmati Rice (Double-Polished)</span>
                          <span className="item-sub">₹90 / Kg</span>
                        </div>
                        <span className="item-status success">Listed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'consumer' && (
              <div
                className="portal-panel animated fadeIn"
                id="consumer-portal-panel"
                role="tabpanel"
                aria-labelledby="consumer-tab"
              >
                <div className="panel-content">
                  <h3>Providing Fresh, Quality Harvest for Households</h3>
                  <p>
                    For consumers, Farm Buddy offers an intuitive and transparent e-commerce experience. Buy fresh farm goods straight from the source.
                  </p>
                  <ul className="panel-list">
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Traceable Harvest:</strong> Discover the exact farmer behind every grain, fruit, or vegetable you purchase.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Price Comparison:</strong> Easily view listings from multiple farmers to find the harvest that fits your budget.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Safe Transactions:</strong> Enjoy secure payments with a clear breakdown of pricing, taxes, and shipping.
                    </li>
                    <li>
                      <span className="list-icon">✓</span>
                      <strong>Premium Organic Options:</strong> Explore dedicated categories for certified organic goods and raw local honey/spices.
                    </li>
                  </ul>
                  <div className="panel-actions">
                    <Link to="/consumer" className="btn-primary">Browse Marketplace</Link>
                  </div>
                </div>
                <div className="panel-visual">
                  <div className="visual-glass-card">
                    <div className="glass-header">
                      <div className="glass-dot dot-red"></div>
                      <div className="glass-dot dot-yellow"></div>
                      <div className="glass-dot dot-green"></div>
                      <span className="glass-title">Cart Checkout Preview</span>
                    </div>
                    <div className="glass-body">
                      <div className="preview-list-item">
                        <img src="/images/apples.jpg" alt="Apple" className="preview-item-img" />
                        <div className="item-info">
                          <span className="item-name">Kashmiri Apples (Fresh)</span>
                          <span className="item-sub">Farmer: Ramesh Kumar</span>
                        </div>
                        <span className="item-price">₹120</span>
                      </div>
                      <div className="preview-list-item">
                        <img src="/images/vegetables.jpg" alt="Tomato" className="preview-item-img" />
                        <div className="item-info">
                          <span className="item-name">Organic Tomatoes</span>
                          <span className="item-sub">Farmer: Sunita Sharma</span>
                        </div>
                        <span className="item-price">₹40</span>
                      </div>
                      <div className="preview-divider"></div>
                      <div className="preview-summary-row">
                        <span>Subtotal</span>
                        <strong>₹160.00</strong>
                      </div>
                      <div className="preview-summary-row success-row">
                        <span>Middleman Fees Saved</span>
                        <strong className="text-primary">- ₹35.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Join the Movement?</h2>
            <p>Whether you're a farmer seeking fair value or a consumer looking for healthy produce, you belong here.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Create Your Account</Link>
              <Link to="/consumer" className="btn-outline">Explore Marketplace</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;