/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Nothing from "./nothing";
import { Link } from 'react-router-dom';
import "../Styles/addCart.css";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import '../Styles/web.css';

const AddCart = ({ cart, setCart, handleChange }) => {
  // FIX: initialize price as 0 (not 1) so empty cart correctly shows Nothing
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    Swal.fire({
      toast: true,
      icon: "info",
      title: "Item removed",
      timer: 3000,
      showConfirmButton: false,
      position: 'top-end',
      text: "One item has been removed from your cart",
    });
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  // FIX: stable callback, recalculates from current cart (no stale closure issue)
  const handlePrice = useCallback(() => {
    let ans = 0;
    cart.forEach((item) => { ans += item.amount * item.price; });
    setPrice(ans);
  }, [cart]);

  // FIX: proper dependency array — only runs when cart changes
  useEffect(() => {
    handlePrice();
  }, [handlePrice]);

  const eventTrap = () => {
    localStorage.setItem('billAmount', price);
  };

  if (cart.length === 0) {
    return <Nothing />;
  }

  return (
    <main id="main-content" className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-grid">
        {cart.map((ele) => (
          <div
            key={ele.id}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={ele.img_url}
              alt={ele.name}
              loading="lazy"
              width="300"
              height="194"
              style={{ width: '100%', height: '194px', objectFit: 'cover' }}
            />
            <div style={{ padding: 'var(--space-5)', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--text-primary)', margin: 0 }}>
                    {ele.name}
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
                    ₹{ele.price} per kg
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Remaining stock: {ele.stock} kg
                  </p>
                </div>
                <IconButton
                  aria-label={`Remove ${ele.name} from cart`}
                  size="medium"
                  onClick={() => handleRemove(ele.id)}
                  sx={{ color: '#e53935', '&:hover': { bgcolor: 'rgba(229,57,53,0.08)' } }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>

              {/* Quantity controls */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-4)',
                padding: 'var(--space-2) var(--space-3)',
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-full)',
                width: 'fit-content',
              }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginRight: 'var(--space-2)' }}>
                  Qty:
                </span>
                <IconButton
                  id={`decre-${ele.id}`}
                  size="small"
                  aria-label={`Decrease ${ele.name} quantity`}
                  onClick={() => handleChange(ele, -1)}
                  sx={{ color: 'var(--primary)' }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <span style={{ minWidth: '24px', textAlign: 'center', fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {ele.amount}
                </span>
                <IconButton
                  id={`incre-${ele.id}`}
                  size="small"
                  aria-label={`Increase ${ele.name} quantity`}
                  onClick={() => handleChange(ele, 1)}
                  sx={{ color: 'var(--primary)' }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>

              <p style={{
                marginTop: 'var(--space-3)',
                fontSize: 'var(--text-base)',
                fontWeight: 700,
                color: 'var(--primary)',
                fontVariantNumeric: 'tabular-nums',
              }}>
                Subtotal: ₹{(ele.amount * ele.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary bar */}
      <div className="cart-summary">
        <div>
          <p className="cart-total-label">Cart Total</p>
          <p className="cart-total-amount" style={{ fontVariantNumeric: 'tabular-nums' }}>₹{price.toFixed(2)}</p>
        </div>
        <Link to="/payment" onClick={eventTrap}>
          <Button
            id="proceed-to-pay"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'var(--accent)',
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              borderRadius: '50px',
              px: 5,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': { bgcolor: 'var(--accent-hover)' },
            }}
          >
            Proceed to Pay
          </Button>
        </Link>
      </div>
    </main>
  );
};

AddCart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddCart;