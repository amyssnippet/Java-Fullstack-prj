'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animate in on load
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isLoaded ? styles.animateIn : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">Sportify</Link>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          <li><Link href="#new-featured">NEW & FEATURED</Link></li>
          <li><Link href="/store">SHOP</Link></li>
          <li><Link href="#categories">CATEGORIES</Link></li>
          <li><Link href="#sale">SALE</Link></li>
          <li><Link href="#store">STORE</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={styles.mobileMenu}>
          <li><Link href="#new-featured" onClick={closeMenu}>NEW & FEATURED</Link></li>
          <li><Link href="/store" onClick={closeMenu}>SHOP</Link></li>
          <li><Link href="#categories" onClick={closeMenu}>CATEGORIES</Link></li>
          <li><Link href="#sale" onClick={closeMenu}>SALE</Link></li>
          <li><Link href="#store" onClick={closeMenu}>STORE</Link></li>
          <li><Link href="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      )}
    </nav>
  );
}