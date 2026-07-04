// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/web.css';

const categories = [
  {
    title: 'Grains',
    img: '/images/grains.jpeg',
    desc: 'Rice, wheat, corn and more — straight from the field to your pantry.',
    to: '/grains',
  },
  {
    title: 'Vegetables',
    img: '/images/vegetables.jpg',
    desc: 'Farm-fresh vegetables picked at peak ripeness — no middlemen.',
    to: '/vegetables',
  },
  {
    title: 'Fruits',
    img: '/images/fruits.jpg',
    desc: 'Seasonal fruits, naturally ripened and sourced directly from orchards.',
    to: '/fruits',
  },
  {
    title: 'Spices',
    img: '/images/spices.jpeg',
    desc: 'Authentic Indian spices with bold flavour and full aroma.',
    to: '/spices',
  },
  {
    title: 'Nuts',
    img: '/images/nuts.jpg',
    desc: 'Protein-rich nuts and dry fruits — naturally sourced and chemical-free.',
    to: '/nuts',
  },
];

const Consumer = () => {
  return (
    <main id="main-content" className="consumer-page">
      {/* Background */}
      <div className="consumer-bg" aria-hidden="true" />

      {/* Header */}
      <header className="consumer-header">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '0.5rem' }}>
          Consumer Section
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.8)', marginBottom: '0.25rem' }}>
          Healthful life begins here
        </p>
        <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.65)' }}>
          Choose your category to explore fresh farm produce
        </p>
      </header>

      {/* Category Cards */}
      <section className="consumer-cards-grid" aria-label="Product categories">
        {categories.map((cat) => (
          <Link
            to={cat.to}
            key={cat.title}
            className="category-card"
            aria-label={`Browse ${cat.title}`}
          >
            <img
              className="category-card-img"
              src={cat.img}
              alt={`Fresh ${cat.title.toLowerCase()}`}
              loading="lazy"
              width="290"
              height="180"
            />
            <div className="category-card-body">
              <h2 className="category-card-title">{cat.title}</h2>
              <p className="category-card-desc">{cat.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Consumer;