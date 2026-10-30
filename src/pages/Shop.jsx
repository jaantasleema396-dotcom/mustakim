import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products, { categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync category state if URL parameter changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setMaxPrice(3000);
    setSortBy('default');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesPrice = p.price <= maxPrice;
        return matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.id - b.id; // default
      });
  }, [selectedCategory, maxPrice, sortBy]);

  const isFiltered = selectedCategory !== 'All' || maxPrice < 3000 || sortBy !== 'default';

  return (
    <div className="page shop-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-label">Exclusive Collection</span>
          <h1 className="section-title">The Complete Men's Wardrobe</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            48 bespoke garments designed for longevity and effortless refinement.
          </p>
        </div>

        <div className="shop-layout">
          {/* Mobile Filter Overlay */}
          {mobileFilterOpen && (
            <div
              className="sidebar-overlay"
              onClick={() => setMobileFilterOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Left Sidebar Filter Panel */}
          <aside className={`shop-sidebar ${mobileFilterOpen ? 'open' : ''}`}>
            <button
              className="sidebar-close-btn"
              onClick={() => setMobileFilterOpen(false)}
              aria-label="Close filters"
            >
              ✕
            </button>

            {/* Category Filter */}
            <div className="sidebar-card glass-card">
              <h4>Categories</h4>
              <div
                className={`filter-option ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('All')}
              >
                <span>All Apparel</span>
                <span className="count">{products.length}</span>
              </div>
              {categories.map((cat) => {
                const count = products.filter((p) => p.category === cat).length;
                return (
                  <div
                    key={cat}
                    className={`filter-option ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    <span>{cat}</span>
                    <span className="count">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Max Price Range Slider */}
            <div className="sidebar-card glass-card">
              <h4>Price Filter</h4>
              <div className="price-range-container">
                <div className="price-display">
                  <span>Up to ₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="3000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="price-range-slider"
                  aria-label="Maximum price filter"
                />
                <div className="price-display" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Min</span>
                  <span>Max ₹3,000</span>
                </div>
              </div>
            </div>

            {/* Reset Filters */}
            {isFiltered && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleResetFilters}
                style={{ width: '100%', marginTop: '8px' }}
                id="resetFiltersBtn"
              >
                Reset All Filters
              </button>
            )}

            {/* Brand Authenticity Assurance */}
            <div className="sidebar-card glass-card" style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>
                🛡️ Clothes Hub Guarantee
              </div>
              <p style={{ lineHeight: '1.5' }}>
                Trade Name of <strong>Mustakim</strong> (GSTIN: 07KOZPM7050B1ZF). Delhi registered.
              </p>
            </div>
          </aside>

          {/* Main Product Catalog Section */}
          <main className="shop-main">
            {/* Toolbar: Counter, Mobile Filter Toggle, Sort, Grid/List Toggle */}
            <div className="shop-toolbar glass-card" style={{ padding: '14px 20px', borderRadius: 'var(--radius-md)' }}>
              <div className="shop-count">
                Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
              </div>

              <div className="shop-toolbar-right">
                {/* Mobile Filter Button */}
                <button
                  className="btn btn-secondary btn-sm sidebar-toggle-btn"
                  onClick={() => setMobileFilterOpen(true)}
                  id="mobileFilterToggleBtn"
                >
                  ⚡ Filters
                </button>

                {/* Sort Selector */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                  aria-label="Sort products"
                  id="sortBySelect"
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>

                {/* View Mode Toggle (Grid / List) */}
                <div className="view-toggle" aria-label="View toggle">
                  <button
                    className={viewMode === 'grid' ? 'active' : ''}
                    onClick={() => setViewMode('grid')}
                    title="Grid view"
                    aria-label="Grid view"
                  >
                    ▦
                  </button>
                  <button
                    className={viewMode === 'list' ? 'active' : ''}
                    onClick={() => setViewMode('list')}
                    title="List view"
                    aria-label="List view"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid or Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="no-products glass-card">
                <div className="no-products-icon">🔍</div>
                <h3>No Matching Products</h3>
                <p>We couldn't find any garments matching your current filter criteria.</p>
                <button className="btn btn-primary" onClick={handleResetFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
