'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './HeroSection.module.css';

const videos = [
  '/Herosection-video.mp4', // LeBron James
];

const labels = ['LEBRON JAMES'];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Animate in on load
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleShopClick = () => {
    router.push('/store');
  };

  const handleHeroClick = () => {
    // Pause video and navigate to store
    const video = document.querySelector('video');
    if (video) video.pause();
    router.push('/store');
  };

  return (
    <section className={styles.hero} onClick={handleHeroClick}>
      <video
        src="/lebrone-james.mp4"
        autoPlay
        muted
        playsInline
        loop
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div className={styles.overlay} />
      <div className={`${styles.content} ${isLoaded ? styles.animateIn : ''}`}>
        <h1 className={styles.headline}>JUST DO IT.</h1>
        <p className={styles.subtext}>Only one way to find out.</p>
        <button className={styles.button} onClick={handleShopClick}>
          Shop Now
        </button>
      </div>
    </section>
  );
}
