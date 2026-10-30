import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page about-page">
      <div className="container">
        {/* Header */}
        <div className="page-header about-hero">
          <span className="section-label">Heritage & Craft</span>
          <h1 className="section-title">The Clothes Hub Chronicle</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A journey of purposeful design, accessible luxury, and honest Indian menswear craftsmanship.
          </p>
        </div>

        {/* Stats Counter Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Artisanal Garment Designs</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Discerning Gentlemen Dressed</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Indian Cities Delivered</div>
            </div>
          </div>
        </section>

        {/* Vertical Storytelling Timeline Layout */}
        <section className="timeline-section" style={{ padding: '40px 0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="section-label">Our Evolution</span>
            <h2 className="section-title">Our Story & Purpose</h2>
          </div>

          <div className="timeline">
            {/* Timeline Item 1: Who We Are */}
            <div className="timeline-item">
              <div className="timeline-content glass-card">
                <span className="section-label">Who We Are</span>
                <h3>Rooted in Capital Elegance</h3>
                <p>
                  Clothes Hub is a premium gents fashion brand and the trade name of <strong>Mustakim</strong>, registered under GSTIN <strong>07KOZPM7050B1ZF</strong>. Operating from the heart of Delhi (Building No. 08, Delhi Road, New Delhi — 110005), we set out with a singular, resolute conviction: that superior menswear should not command exorbitant designer markups.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Every piece in our carefully tailored portfolio is competitively priced, bringing true luxury craftsmanship within direct reach of style-conscious men across India.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop&q=80"
                  alt="Tailoring Workshop and Fabrics"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Timeline Item 2: Our Vision */}
            <div className="timeline-item">
              <div className="timeline-content glass-card">
                <span className="section-label">Our Vision</span>
                <h3>India's Most Trusted Fashion House</h3>
                <p>
                  We envision Clothes Hub as India's premier affordable-luxury menswear destination. By cutting out speculative middlemen, directly sourcing long-staple cottons, linens, and durable twills, and maintaining rigorous in-house quality controls, we ensure every stitch upholds international bespoke standards.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Whether dressing for milestone boardrooms, festive Indian celebrations, or refined weekend retreats, our patrons experience garment architecture built to endure seasons.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop&q=80"
                  alt="Modern Menswear Fashion Vision"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Timeline Item 3: Ethical Craftsmanship */}
            <div className="timeline-item">
              <div className="timeline-content glass-card">
                <span className="section-label">Craft & Ethics</span>
                <h3>Fair Wages & Sustainable Tailoring</h3>
                <p>
                  Our workshop partners operate under strict fair-wage standards and safe labor practices. We prioritize azo-free dyes, natural shell buttons, and zero-plastic recyclable mailer packaging. 
                </p>
                <p style={{ marginTop: '12px' }}>
                  Led by Mustakim's commitment to commercial transparency, our prices directly reflect the honest cost of premium materials, skilled seam work, and insured express logistics.
                </p>
              </div>
              <div className="timeline-image">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80"
                  alt="Clothes Hub Atelier and Storefront"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Stand For — 4 Value Cards */}
        <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Core Pillars</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card glass-card">
              <div className="icon">🎨</div>
              <h4>Design Excellence</h4>
              <p>Timeless European and modern Indian tailoring cut for flattering fits and day-long poise.</p>
            </div>

            <div className="about-value-card glass-card">
              <div className="icon">💎</div>
              <h4>Premium Quality</h4>
              <p>Pre-shrunk, mercerized pure cottons, rich textured linens, and heavy-gauge outerwear fabrics.</p>
            </div>

            <div className="about-value-card glass-card">
              <div className="icon">🌿</div>
              <h4>Sustainability</h4>
              <p>Low-impact botanical wash techniques, recycled garment bags, and zero fast-fashion waste.</p>
            </div>

            <div className="about-value-card glass-card">
              <div className="icon">💰</div>
              <h4>Affordable Luxury</h4>
              <p>Transparent, honest pricing without retail markups or inflated designer margins.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ textAlign: 'center', padding: '60px 0 80px' }}>
          <div className="glass-card" style={{ padding: '48px 24px', maxWidth: '720px', margin: '0 auto' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '12px' }}>
              Experience the New Standard in Menswear
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Explore our newest drops with free delivery across India on orders over ₹1,999.
            </p>
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop the Collection Now →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
