import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();

  const [step, setStep] = useState(1); // 1: Delivery, 2: Payment, 3: Confirmation

  // Delivery form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'New Delhi',
    state: 'Delhi',
    pinCode: '110005',
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI' | 'Card' | 'NetBanking' | 'COD'

  // Confirmed order data state
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const freeDeliveryThreshold = 1999;
  const isFreeDelivery = cartTotal >= freeDeliveryThreshold;
  const shippingFee = isFreeDelivery ? 0 : 99;
  const grandTotal = cartTotal + shippingFee;

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.pinCode
    ) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlaceOrder = () => {
    // Generate Order ID format CH-XXXXXX
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderId = `CH-${randomNum}`;

    const order = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      customer: { ...formData },
      items: [...cartItems],
      paymentMethod,
      subtotal: cartTotal,
      shippingFee,
      total: grandTotal,
      estimatedDelivery: '5–7 business days',
    };

    setConfirmedOrder(order);
    clearCart();
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If cart is empty and no confirmed order, show empty state
  if (cartItems.length === 0 && !confirmedOrder) {
    return (
      <div className="page checkout-page">
        <div className="container">
          <div className="checkout-empty glass-card" style={{ maxWidth: '600px', margin: '40px auto' }}>
            <div className="icon">🛍️</div>
            <h2>Your Shopping Bag is Empty</h2>
            <p>You haven't selected any items yet. Explore our bespoke collection of premium shirts, trousers, and outerwear.</p>
            <Link to="/shop" className="btn btn-primary btn-lg" id="emptyCheckoutShopBtn">
              Explore Our Collection →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Order Confirmation Screen
  if (step === 3 && confirmedOrder) {
    return (
      <div className="page checkout-page">
        <div className="container">
          <div className="order-confirmation">
            <div className="success-icon">✨</div>
            <h2>Order Confirmed!</h2>
            <p>
              Thank you for shopping with Clothes Hub. A confirmation receipt has been dispatched to <strong>{confirmedOrder.customer.email}</strong>.
            </p>

            <div className="order-details-card glass-card">
              <h4>Order Summary #{confirmedOrder.orderId}</h4>

              <div className="order-detail-row">
                <span className="label">Order ID:</span>
                <span className="value" style={{ color: 'var(--accent)', fontWeight: 700 }}>{confirmedOrder.orderId}</span>
              </div>
              <div className="order-detail-row">
                <span className="label">Order Date:</span>
                <span className="value">{confirmedOrder.date}</span>
              </div>
              <div className="order-detail-row">
                <span className="label">Shipping To:</span>
                <span className="value">
                  {confirmedOrder.customer.fullName}<br />
                  {confirmedOrder.customer.address}, {confirmedOrder.customer.city}, {confirmedOrder.customer.state} — {confirmedOrder.customer.pinCode}
                </span>
              </div>
              <div className="order-detail-row">
                <span className="label">Estimated Delivery:</span>
                <span className="value" style={{ color: 'var(--accent2)' }}>{confirmedOrder.estimatedDelivery} (Dispatched from Delhi)</span>
              </div>
              <div className="order-detail-row">
                <span className="label">Payment Mode:</span>
                <span className="value">{confirmedOrder.paymentMethod}</span>
              </div>
              <div className="order-detail-row" style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '8px' }}>
                <span className="label" style={{ fontWeight: 700 }}>Total Paid:</span>
                <span className="value" style={{ fontSize: '1.2rem', color: 'var(--accent)', fontWeight: 700 }}>
                  ₹{confirmedOrder.total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="billing-entity" style={{ marginBottom: '28px' }}>
              Tax Invoicing Entity: <strong>Mustakim (Trade Name: Clothes Hub)</strong> · GSTIN: 07KOZPM7050B1ZF
            </div>

            <Link to="/shop" className="btn btn-primary btn-lg">
              Continue Shopping →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page checkout-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header" style={{ paddingBottom: '30px' }}>
          <span className="section-label">Secure Checkout</span>
          <h1 className="section-title">Complete Your Order</h1>
        </div>

        {/* Stepper / Wizard UI */}
        <div className="checkout-stepper">
          <div className={`step ${step === 1 ? 'active' : 'completed'}`}>
            <div className="step-number">{step > 1 ? '✓' : '1'}</div>
            <div className="step-label">Delivery Details</div>
          </div>

          <div className={`step-connector ${step > 1 ? 'completed' : ''}`} />

          <div className={`step ${step === 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Payment Mode</div>
          </div>
        </div>

        {/* Checkout Two-Column Layout */}
        <div className="checkout-layout">
          {/* Left Column: Interactive Wizard Steps */}
          <div className="checkout-main">
            {step === 1 && (
              <div className="checkout-card glass-card">
                <h3>Step 1: Delivery Address & Contact</h3>
                <form onSubmit={handleDeliverySubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="checkout-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkoutEmail">Email Address *</label>
                      <input
                        id="checkoutEmail"
                        type="email"
                        className="form-input"
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkoutPhone">Phone Number *</label>
                      <input
                        id="checkoutPhone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="checkoutAddress">Street Address / House / Flat *</label>
                    <input
                      id="checkoutAddress"
                      type="text"
                      className="form-input"
                      placeholder="Apartment, Street name, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div className="checkout-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkoutCity">City *</label>
                      <input
                        id="checkoutCity"
                        type="text"
                        className="form-input"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="checkoutState">State *</label>
                      <input
                        id="checkoutState"
                        type="text"
                        className="form-input"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="checkoutPin">PIN Code (India) *</label>
                    <input
                      id="checkoutPin"
                      type="text"
                      className="form-input"
                      placeholder="6-digit PIN"
                      maxLength="6"
                      value={formData.pinCode}
                      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '12px' }} id="proceedToPaymentBtn">
                    Proceed to Payment →
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="checkout-card glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ margin: 0 }}>Step 2: Select Payment Method</h3>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setStep(1)}
                  >
                    ← Edit Address
                  </button>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  All transactions are secure and encrypted under 256-bit SSL.
                </p>

                <div className="payment-methods">
                  <div
                    className={`payment-option ${paymentMethod === 'UPI' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('UPI')}
                  >
                    <span className="icon">⚡</span>
                    <div>
                      <strong>UPI Instant</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GPay, PhonePe, Paytm, QR</div>
                    </div>
                  </div>

                  <div
                    className={`payment-option ${paymentMethod === 'Card' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('Card')}
                  >
                    <span className="icon">💳</span>
                    <div>
                      <strong>Credit / Debit Card</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Visa, MasterCard, RuPay</div>
                    </div>
                  </div>

                  <div
                    className={`payment-option ${paymentMethod === 'NetBanking' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('NetBanking')}
                  >
                    <span className="icon">🏦</span>
                    <div>
                      <strong>Net Banking</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>50+ Indian Banks</div>
                    </div>
                  </div>

                  <div
                    className={`payment-option ${paymentMethod === 'COD' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('COD')}
                  >
                    <span className="icon">💵</span>
                    <div>
                      <strong>Cash on Delivery</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pay upon package arrival</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px', background: 'rgba(212, 160, 83, 0.08)', borderRadius: 'var(--radius-md)', marginBottom: '24px', fontSize: '0.85rem' }}>
                  <div>📍 <strong>Delivering to:</strong> {formData.fullName}, {formData.address}, {formData.city}, {formData.state} — {formData.pinCode}</div>
                  <div style={{ marginTop: '4px' }}>📞 <strong>Contact:</strong> {formData.phone} | {formData.email}</div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  onClick={handlePlaceOrder}
                  id="confirmOrderBtn"
                >
                  Confirm & Place Order (₹{grandTotal.toLocaleString('en-IN')}) →
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <aside className="checkout-summary">
            <div className="checkout-card glass-card">
              <h3>Order Summary ({cartItems.length} items)</h3>

              <div className="order-summary-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="order-summary-item">
                    <div className="order-summary-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop';
                        }}
                      />
                    </div>
                    <div className="order-summary-info">
                      <h5>{item.name}</h5>
                      <div className="qty">Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}</div>
                      <div className="item-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-totals">
                <div className="row">
                  <span style={{ color: 'var(--text-secondary)' }}>Items Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="row">
                  <span style={{ color: 'var(--text-secondary)' }}>Shipping Charges</span>
                  {isFreeDelivery ? (
                    <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>FREE</span>
                  ) : (
                    <span>₹99</span>
                  )}
                </div>
                {!isFreeDelivery && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '-4px', marginBottom: '8px' }}>
                    💡 Add items worth ₹{(freeDeliveryThreshold - cartTotal).toLocaleString('en-IN')} more to unlock FREE delivery!
                  </p>
                )}
                <div className="row total">
                  <span>Grand Total</span>
                  <span style={{ color: 'var(--accent)' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="billing-entity">
                Billing Entity: <strong>Mustakim (Trade Name: Clothes Hub)</strong><br />
                GSTIN: 07KOZPM7050B1ZF · Central Delhi, Delhi — 110005
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
