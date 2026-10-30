import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>✨ Free Delivery on Orders Above ₹1,999 | New Collection Live Now</span>
      </div>

      {/* Main Sticky Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
          {/* Mobile hamburger */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobileMenuToggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Brand Logo — Left Aligned */}
          <div className="header-brand" style={{ textAlign: 'left' }}>
            <Link to="/" onClick={closeMobileMenu}>
              <span className="brand-icon">❖</span>
              <span>Clothes Hub</span>
            </Link>
          </div>

          {/* Center Nav Links */}
          <nav className="nav-left" style={{ justifyContent: 'center', gap: '32px' }}>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Shop</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact Us</NavLink>
          </nav>

          {/* Right Cart */}
          <div className="nav-right">
            <button
              className="cart-btn"
              onClick={onOpenCart}
              aria-label={`Shopping Cart with ${cartCount} items`}
              id="headerCartBtn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Shop Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact & FAQs
          </NavLink>
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Operated by <strong>Mustakim</strong> (Trade Name: Clothes Hub)
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              GSTIN: 07KOZPM7050B1ZF • Delhi, India
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
