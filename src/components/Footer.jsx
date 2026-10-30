import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Wave / Curved SVG Divider */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0,0 C320,50 480,10 720,35 C960,60 1120,20 1440,40 L1440,60 L0,60 Z"
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>

      <div className="container footer-content">
        <div className="footer-grid">
          {/* Column 1: Brand & Business Info */}
          <div className="footer-brand">
            <h3>Clothes Hub</h3>
            <p>
              Premium gents fashion crafted for modern elegance. Designed for supreme comfort and effortless style.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>Proprietor:</strong> Mustakim<br />
              <strong>GSTIN:</strong> 07KOZPM7050B1ZF<br />
              <strong>Address:</strong> Building No. 08, Delhi Road, New Delhi, Central Delhi, Delhi — 110005<br />
              <strong>Phone:</strong> +91 99817 82579<br />
              <strong>Email:</strong> support@clotheshub.in
            </p>

            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="footer-column">
            <h4>Shop</h4>
            <Link to="/shop">All Products</Link>
            <Link to="/shop?category=Shirts">Pure Cotton Shirts</Link>
            <Link to="/shop?category=Jeans">Denim & Trousers</Link>
            <Link to="/shop?category=Jackets">Blazers & Shackets</Link>
            <Link to="/shop?category=Hoodies">Hoodies & Knitwear</Link>
            <Link to="/shop?category=Ethnic+Wear">Festive Ethnic Wear</Link>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          {/* Column 4: Support & Newsletter */}
          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/contact">Help Center & FAQs</Link>
            <Link to="/terms#shipping">Shipping Policy</Link>
            <Link to="/terms#returns">Returns & Refunds (7-Day)</Link>
            <Link to="/contact">Dispute Resolution</Link>

            <div className="footer-newsletter">
              <h4 style={{ marginTop: '20px', marginBottom: '8px' }}>Join the Club</h4>
              <p>Receive exclusive member drops and private discounts.</p>
              {subscribed ? (
                <p style={{ color: 'var(--accent2)', fontWeight: 600 }}>✨ Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Newsletter email"
                  />
                  <button type="submit">Join</button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © 2026 Clothes Hub — A trade name of <strong>Mustakim</strong>. All rights reserved. GSTIN: 07KOZPM7050B1ZF
          </p>
          <div className="footer-bottom-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
