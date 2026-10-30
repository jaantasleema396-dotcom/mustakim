import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="quick-view-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="quick-view-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="quick-view-image">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop';
            }}
          />
        </div>

        <div className="quick-view-info">
          <span className="product-card-category">{product.category}</span>
          <h3>{product.fullName || product.name}</h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
            <div className="star-rating">
              ★ <span className="rating-value">{product.rating} / 5.0</span>
            </div>
          </div>

          <p>{product.description}</p>

          <div style={{ marginBottom: '24px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <div>🚚 <strong>Free Shipping</strong> on orders above ₹1,999 (else ₹99)</div>
            <div style={{ marginTop: '4px' }}>↩️ <strong>7-Day Hassle-Free Returns</strong> across India</div>
            <div style={{ marginTop: '4px' }}>🏢 Official brand of <strong>Mustakim</strong> (GSTIN: 07KOZPM7050B1ZF)</div>
          </div>

          <button
            className="btn btn-primary"
            onClick={handleAddToCart}
            style={{ width: '100%' }}
          >
            {added ? '✓ Added to Bag!' : `Add to Bag • ₹${product.price.toLocaleString('en-IN')}`}
          </button>
        </div>
      </div>
    </div>
  );
}
