import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import heroImg from '../assets/hero-shirt.png';

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const navigate = useNavigate();

  // First 10 products for featured collection
  const featuredProducts = products.slice(0, 10);

  const categoryIcons = {
    Shirts: '👔',
    'T-Shirts': '👕',
    Jeans: '👖',
    Jackets: '🧥',
    Hoodies: '🧶',
    'Ethnic Wear': '✨',
  };

  const getCategoryCount = (cat) => products.filter((p) => p.category === cat).length;

  return (
    <div className="page home-page">
      {/* 1. SPLIT-SCREEN HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge badge">
            <span>✨ New Collection 2026</span>
          </div>
          <h1 className="hero-title">
            Redefine Your <span className="highlight">Style</span> With Clothes Hub
          </h1>
          <p className="hero-subtitle">
            Premium gents clothing with impeccable tailoring,
            breathable natural fibers, and contemporary aesthetics curated by <strong>Mustakim</strong>.
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn btn-primary btn-lg" id="heroShopBtn">
              Shop Now →
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Our Story
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImg}
            alt="Clothes Hub Textured Summer Shirts Collection"
            loading="eager"
          />
        </div>
      </section>

      {/* 2. MARQUEE / TICKER BANNER */}
      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-track">
          <span>FREE DELIVERY ON ORDERS ABOVE ₹1,999</span>
          <span className="dot">•</span>
          <span>NEW COLLECTION 2026</span>
          <span className="dot">•</span>
          <span>PREMIUM QUALITY GUARANTEED</span>
          <span className="dot">•</span>
          <span>7-DAY HASSLE-FREE RETURNS</span>
          <span className="dot">•</span>
          <span>100% SECURE PAYMENTS</span>
          <span className="dot">•</span>
          <span>CURATED BY MUSTAKIM</span>
          <span className="dot">•</span>
          <span>FREE DELIVERY ON ORDERS ABOVE ₹1,999</span>
          <span className="dot">•</span>
          <span>NEW COLLECTION 2026</span>
          <span className="dot">•</span>
          <span>PREMIUM QUALITY GUARANTEED</span>
          <span className="dot">•</span>
          <span>7-DAY HASSLE-FREE RETURNS</span>
          <span className="dot">•</span>
          <span>100% SECURE PAYMENTS</span>
          <span className="dot">•</span>
          <span>CURATED BY MUSTAKIM</span>
          <span className="dot">•</span>
        </div>
      </div>

      {/* 3. SHOP BY CATEGORY SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">Wardrobe Essentials</span>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Explore our hand-selected apparel designed for versatile day-to-night styling.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((cat) => (
              <div
                key={cat}
                className="category-card"
                onClick={() => navigate(`/shop?category=${encodeURIComponent(cat)}`)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate(`/shop?category=${encodeURIComponent(cat)}`);
                }}
              >
                <div className="category-card-bg">
                  <div className="category-card-icon">{categoryIcons[cat] || '👔'}</div>
                  <div className="category-card-name">{cat}</div>
                  <div className="category-card-count">{getCategoryCount(cat)} Products</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED COLLECTION SECTION (First 10 Products) */}
      <section className="section" style={{ background: 'rgba(17, 24, 39, 0.4)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-label">Curated Selection</span>
              <h2 className="section-title">Featured Pieces</h2>
            </div>
            <Link to="/shop" className="view-all-link" id="viewAllFeaturedBtn">
              View All Products →
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/shop" className="btn btn-primary btn-lg">
              Explore Complete Catalog →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITIONS SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">The Clothes Hub Promise</span>
            <h2 className="section-title">Why Men Choose Us</h2>
          </div>

          <div className="value-grid">
            <div className="value-card glass-card">
              <div className="value-card-icon">🚚</div>
              <h4>Free Delivery over ₹1,999</h4>
              <p>Dispatched in 1–2 days and safely delivered to your doorstep within 5–7 business days across India.</p>
            </div>

            <div className="value-card glass-card">
              <div className="value-card-icon">🔒</div>
              <h4>Secure Payments</h4>
              <p>Protected by 256-bit SSL encryption. We accept UPI, Credit/Debit cards, Net Banking, and COD.</p>
            </div>

            <div className="value-card glass-card">
              <div className="value-card-icon">↩️</div>
              <h4>Easy 7-Day Returns</h4>
              <p>Hassle-free 7-day return policy. Instant doorstep pickup and rapid refund processing.</p>
            </div>

            <div className="value-card glass-card">
              <div className="value-card-icon">⭐</div>
              <h4>Premium Quality</h4>
              <p>High-grade weaves and designer finishes at transparent, honest pricing without retail markups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
