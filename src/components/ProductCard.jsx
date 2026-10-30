import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="product-card" onClick={() => onQuickView && onQuickView(product)}>
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop';
          }}
        />

        {/* Added to cart overlay animation */}
        {added && <div className="added-feedback">✓ Added to Bag!</div>}

        {/* Hover overlay with Action Buttons */}
        <div className="product-card-overlay">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '80%' }}>
            <button
              className="btn btn-primary btn-sm"
              onClick={handleAdd}
              id={`addBtn-${product.id}`}
            >
              Add to Bag
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                if (onQuickView) onQuickView(product);
              }}
            >
              Quick View
            </button>
          </div>
        </div>
      </div>

      <div className="product-card-body">
        <div className="product-card-category">{product.category}</div>
        <h4 className="product-card-name">{product.name}</h4>

        <div className="product-card-footer">
          <div className="price">₹{product.price.toLocaleString('en-IN')}</div>
          <div className="star-rating">
            ★ <span className="rating-value">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
