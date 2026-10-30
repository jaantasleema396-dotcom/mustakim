import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  const navigate = useNavigate();

  const freeDeliveryThreshold = 1999;
  const isFreeDelivery = cartTotal >= freeDeliveryThreshold;
  const amountNeeded = freeDeliveryThreshold - cartTotal;
  const progressPercent = Math.min(100, Math.round((cartTotal / freeDeliveryThreshold) * 100));
  const shippingFee = cartItems.length === 0 ? 0 : isFreeDelivery ? 0 : 99;
  const orderTotal = cartTotal + shippingFee;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Drawer Panel */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <h3>Your Bag ({cartCount})</h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cartItems.length > 0 && (
          <div className="shipping-progress">
            {isFreeDelivery ? (
              <p className="unlocked">🎉 FREE Delivery Unlocked! (Orders over ₹1,999)</p>
            ) : (
              <p>
                Add <span className="highlight">₹{amountNeeded.toLocaleString('en-IN')}</span> more for <span className="highlight">FREE Delivery</span>
              </p>
            )}
            <div className="progress-bar">
              <div
                className={`progress-bar-fill ${isFreeDelivery ? 'complete' : ''}`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛍️</div>
            <h4>Your Bag is Empty</h4>
            <p>Explore our premium collection of shirts, jackets, and trousers.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                navigate('/shop');
              }}
            >
              Explore Collection →
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop';
                    }}
                  />
                </div>
                <div className="cart-item-info">
                  <div>
                    <h5 className="cart-item-name">{item.name}</h5>
                    <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  </div>
                  <div className="cart-item-actions">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cart Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
              <span style={{ fontWeight: 600 }}>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="cart-summary-row">
              <span style={{ color: 'var(--text-secondary)' }}>Shipping</span>
              {isFreeDelivery ? (
                <span className="free">FREE</span>
              ) : (
                <span>₹99</span>
              )}
            </div>
            <div className="cart-summary-row total">
              <span>Estimated Total</span>
              <span style={{ color: 'var(--accent)' }}>₹{orderTotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn btn-primary" onClick={handleCheckout} id="drawerCheckoutBtn">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
