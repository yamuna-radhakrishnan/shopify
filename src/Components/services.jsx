import React from 'react';
import '../Styles/web.css';

const loanLinks = [
  { label: 'Agriculture Department of Tamil Nadu', url: 'http://agriculture.tn.gov.in/' },
  { label: 'Tamil Nadu Agricultural Development Bank (TNAU)', url: 'https://www.tnau.ac.in/agri_bank/' },
  { label: "Farmer's Portal of Tamil Nadu", url: 'http://tnfarmers.tn.gov.in/' },
];

const centralLoanLinks = [
  { label: 'National Bank for Agriculture and Rural Development (NABARD)', url: 'https://www.nabard.org/' },
  { label: "Ministry of Agriculture and Farmers' Welfare", url: 'https://www.agriculture.gov.in/' },
  { label: 'National Portal of India — Agriculture', url: 'https://www.india.gov.in/topic/agriculture' },
];

const Services = () => {
  return (
    <main id="main-content" className="services-page">
      {/* Header */}
      <header className="services-header">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Services
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)' }}>
          Government loans, subsidies and helpline numbers for Indian farmers
        </p>
      </header>

      {/* Sticky Tab Navigation */}
      <nav className="services-nav-tabs" aria-label="Service categories">
        <a href="#loans" className="services-tab">Loans</a>
        <a href="#subsidies" className="services-tab">Subsidies</a>
        <a href="#helpline" className="services-tab">Helpline Numbers</a>
      </nav>

      {/* Content */}
      <div className="services-content">

        {/* === LOANS === */}
        <section id="loans" className="services-section">
          <h2 className="services-section-title">Agricultural Loans</h2>

          <div className="services-highlight">
            <strong>SBI is rated the best bank for farming loans</strong> in recent surveys. Loan interest ranges from <strong>4%–7%</strong>. For certain crops (Sorghum, Sweetcorn, Teff, Amaranth, Black Quinoa), Tamil Nadu government offers loans up to ₹10,000 per year. For rice-related crops, up to <strong>₹5 lakhs per year</strong> based on land (acres).
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            State Government Loans
          </h3>
          <p className="services-body-text">
            Through the Tamil Nadu Agricultural Development Bank (TNAU), the state government provides a variety of agricultural loans — for farming, horticulture, dairy, poultry production, agricultural mechanisation, and more. Farmers can apply online or at any TNAU location. Loan amounts and interest rates vary by type and creditworthiness.
          </p>
          <ul className="services-list" aria-label="Tamil Nadu loan resources">
            {loanLinks.map((link) => (
              <li key={link.url}>
                {link.label}:{' '}
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
              </li>
            ))}
          </ul>
          <p className="services-body-text" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            * Links may change — verify on official websites.
          </p>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            Central Government Loans
          </h3>
          <p className="services-body-text">
            The Government of India provides agricultural loans through NABARD, Regional Rural Banks (RRBs), and Cooperative Banks. Popular schemes include:
          </p>
          <ul className="services-list" style={{ marginBottom: 'var(--space-6)' }}>
            <li>Pradhan Mantri Fasal Bima Yojana (PMFBY) — Crop Insurance</li>
            <li>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) — Income support for small farmers</li>
            <li>Agriculture Infrastructure Fund — Rural agricultural market development</li>
            <li>Paramparagat Krishi Vikas Yojana (PKVY) — Organic farming development</li>
          </ul>
          <ul className="services-list" aria-label="Central government loan resources">
            {centralLoanLinks.map((link) => (
              <li key={link.url}>
                {link.label}:{' '}
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* === SUBSIDIES === */}
        <section id="subsidies" className="services-section">
          <h2 className="services-section-title">Subsidies</h2>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
            State Government Subsidies
          </h3>
          <p className="services-body-text">
            Tamil Nadu provides various subsidies through state schemes and departments. Popular schemes include:
          </p>
          <ul className="services-list" style={{ marginBottom: 'var(--space-6)' }}>
            <li>Tamil Nadu Crop Insurance Scheme (TNCIS) — Crop insurance for farmers</li>
            <li>TNSNDRF — Financial assistance for farmers affected by natural disasters</li>
            <li>TAMID — Subsidy for purchase of agricultural machinery</li>
            <li>Tamil Nadu Horticulture Development Scheme (TNHDS) — Horticulture support</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            Central Government Subsidies
          </h3>
          <ul className="services-list" style={{ marginBottom: 'var(--space-4)' }}>
            <li>Pradhan Mantri Fasal Bima Yojana (PMFBY) — Crop Insurance</li>
            <li>PM-KISAN — Direct income support to small and marginal farmers</li>
            <li>Paramparagat Krishi Vikas Yojana (PKVY) — Organic farming</li>
            <li>PM Kisan Maandhan Yojana (PM-KMY) — Pension scheme</li>
            <li>National Food Security Mission (NFSM) — Food grains subsidies</li>
            <li>National Horticulture Mission (NHM) — Horticulture development</li>
          </ul>
          <ul className="services-list" aria-label="Central government subsidy resources">
            <li><a href="https://www.agriculture.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Agriculture and Farmers&apos; Welfare</a></li>
            <li><a href="https://www.india.gov.in/topic/agriculture" target="_blank" rel="noopener noreferrer">National Portal of India — Agriculture</a></li>
            {/* FIX: was 'ttps://www.nabard.org/' — missing 'h' */}
            <li><a href="https://www.nabard.org/" target="_blank" rel="noopener noreferrer">National Bank for Agriculture and Rural Development (NABARD)</a></li>
          </ul>
        </section>

        {/* === HELPLINE === */}
        <section id="helpline" className="services-section">
          <h2 className="services-section-title">Helpline Numbers</h2>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
            Tamil Nadu Agriculture Helpline
          </h3>
          <p className="services-body-text">
            The Tamil Nadu state government has a dedicated helpline: <strong>1800-425-5555</strong> (Mon–Fri: 8 AM–8 PM, Sat: 8 AM–2 PM).
          </p>
          <ul className="services-list" style={{ marginBottom: 'var(--space-8)' }}>
            <li>Tamil Nadu Agricultural Development Bank (TNAU): <strong><a href="tel:+914422351133">+91-44-22351133</a></strong></li>
            <li>TN State Agriculture Department: <strong><a href="tel:+914425334840">+91-44-25334840</a></strong></li>
            <li>TN Farmer&apos;s Portal: <strong><a href="tel:+914428880009">+91-44-28880009</a></strong></li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>
            Central Government Helpline Numbers
          </h3>
          <ul className="services-list">
            <li>National Agriculture Market (e-NAM): <strong><a href="tel:+918001801551">1800-180-1551</a></strong></li>
            <li>National Horticulture Board (NHB): <strong><a href="tel:+911123386446">+91-11-23386446</a></strong></li>
            <li>Ministry of Agriculture &amp; Farmers&apos; Welfare: <strong><a href="tel:+911123386446">+91-11-23386446</a></strong></li>
            <li>NABARD: <strong><a href="tel:+912222741231">+91-22-22741231</a></strong></li>
            <li>National Rainfed Area Authority (NRAA): <strong><a href="tel:+911124696951">+91-11-24696951</a></strong></li>
          </ul>
          <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            * Helpline numbers may change — verify on official websites.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Services;