import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { SupaBase } from './createClient';
import '../Styles/web.css';

const SkeletonCard = () => (
  <div
    style={{
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
    }}
  >
    <div className="skeleton" style={{ height: '200px', borderRadius: 0 }} />
    <div style={{ padding: 'var(--space-6)' }}>
      <div className="skeleton" style={{ height: '24px', width: '60%', marginBottom: 'var(--space-3)' }} />
      <div className="skeleton" style={{ height: '16px', width: '90%', marginBottom: 'var(--space-2)' }} />
      <div className="skeleton" style={{ height: '16px', width: '75%', marginBottom: 'var(--space-4)' }} />
      <div className="skeleton" style={{ height: '32px', width: '40%' }} />
    </div>
  </div>
);

const Grains = ({ handleClick }) => {
  const [liked, setLiked] = React.useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data: Grains, error } = await SupaBase.from('grains').select();
      if (error) {
        console.error(error);
      } else {
        setData(Grains || []);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const imgOf = (ele) => ele.img_url || ele.image_url || ele.image || '';

  return (
    <main id="main-content" className="product-page-container">
      <header className="product-page-header">
        <h1 className="product-page-title">Grains</h1>
        <p className="product-page-subtitle">
          Nutritious grains sourced directly from farmers — wheat, rice, millet and more.
        </p>
      </header>

      <section className="products-grid" aria-label="Grains products" aria-busy={loading}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : data.length === 0
            ? <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--space-12)', color: 'var(--text-secondary)' }}>
                No grains available right now. Please check back soon.
              </p>
            : data.map((ele) => (
              <article key={ele.id} className="product-card">
                <img
                  className="product-card-img"
                  src={imgOf(ele)}
                  alt={`${ele.name} — fresh grain`}
                  loading="lazy"
                  width="345"
                  height="200"
                />
                <div className="product-card-body">
                  <h2 className="product-card-name">{ele.name}</h2>
                  <p className="product-card-desc">{ele.description}</p>
                  <p className="product-card-price">
                    ₹{ele.price}
                    <span>per kg</span>
                  </p>
                  <span className="product-card-stock">
                    Stock: {ele.stock} kg available
                  </span>
                </div>
                <div className="product-card-actions">
                  <IconButton
                    size="large"
                    aria-label={`Add ${ele.name} to cart`}
                    onClick={() => {
                      handleClick(ele);
                      Swal.fire({
                        icon: 'success',
                        title: 'Added to cart!',
                        text: `${ele.name} has been added to your cart.`,
                        timer: 2000,
                        showConfirmButton: false,
                        toast: true,
                        position: 'top-end',
                      });
                    }}
                    sx={{ color: 'var(--primary)', '&:hover': { bgcolor: 'var(--primary-light)' } }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label={liked[ele.id] ? `Remove ${ele.name} from wishlist` : `Add ${ele.name} to wishlist`}
                    aria-pressed={Boolean(liked[ele.id])}
                    onClick={() =>
                      setLiked((prev) => ({ ...prev, [ele.id]: !prev[ele.id] }))
                    }
                    sx={{
                      color: liked[ele.id] ? '#e53935' : 'rgba(0,0,0,0.3)',
                      '&:hover': { bgcolor: 'rgba(229,57,53,0.08)' },
                      transition: 'color 200ms ease-out',
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </article>
            ))}
      </section>
    </main>
  );
};

Grains.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Grains;