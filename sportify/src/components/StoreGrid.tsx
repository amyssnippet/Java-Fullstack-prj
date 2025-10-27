'use client';

import { useState } from 'react';
import StoreProductCard from './StoreProductCard';
import styles from './StoreGrid.module.css';

const productImages = [
  '/images/Nike-Football-1.png',
  '/images/Nike-Football-2.png',
  '/images/Nike-Football-3.png',
  '/images/adidas_football-2.png',
  '/images/adidas_football-3.png',
  '/images/adidas_shoe-1.png',
  '/images/adidas_shoe-2.png',
  '/images/adidas_shoe-3.png',
  '/images/asics_shoe-1.png',
  '/images/asics_shoe-2.png',
  '/images/asics_shoe-3.png',
  '/images/babolat-kitback-1.png',
  '/images/babolat-kitback-2.png',
  '/images/babolat-kitback-3.png',
  '/images/babolat-racket-1.png',
  '/images/babolat-racket-2.png',
  '/images/babolat-racket-3.png',
  '/images/babolat.png',
  '/images/babolat_shoe-1.png',
  '/images/babolat_shoe-2.png',
  '/images/babolat_shoe-3.png',
  '/images/puma_shoe-1.png',
  '/images/puma_shoe-2.png',
  '/images/puma_shoe-3.png',
  '/images/victor-racket-1.png',
  '/images/victor-racket-2.png',
  '/images/victor-racket-3.png',
  '/images/victor_shoe-1.png',
  '/images/victor_shoe-2.png',
  '/images/yonex-badminton-1.png',
  '/images/yonex-badminton-2.png',
  '/images/yonex-badminton-3.png',
  '/images/yonex-kitback-1.png',
  '/images/yonex-kitback-2.png',
  '/images/yonex-kitback-3.png',
  '/images/yonex-racket-1.png',
  '/images/yonex-racket-2.png',
  '/images/yonex-racket-3.png',
  '/images/yonex_shoe-1.png',
  '/images/yonex_shoe-2.png',
  '/images/yonex_shoe-3.png'
];

const products = productImages.map((image, index) => ({
  id: index + 1,
  image,
  name: image.split('/').pop()?.replace('.png', '').replace(/-/g, ' ').replace(/_/g, ' ') || 'Product',
  price: `$${(Math.floor(Math.random() * 200) + 20)}`,
  category: image.includes('football') ? 'Football' :
           image.includes('shoe') ? 'Shoes' :
           image.includes('racket') ? 'Rackets' :
           image.includes('kitback') ? 'Bags' :
           image.includes('badminton') ? 'Badminton' : 'Equipment'
}));

const categories = ['All', 'Football', 'Shoes', 'Rackets', 'Bags', 'Badminton', 'Equipment'];

export default function StoreGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>FILTERS</h2>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterTitle}>CATEGORY</h3>
            <ul className={styles.categoryList}>
              {categories.map(category => (
                <li key={category}>
                  <button
                    className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <StoreProductCard
                key={product.id}
                product={product}
                isHovered={hoveredProduct === product.id}
                onHover={() => setHoveredProduct(product.id)}
                onLeave={() => setHoveredProduct(null)}
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}