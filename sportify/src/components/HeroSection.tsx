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
        src={videos[0]}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.heroVideo}
        aria-hidden="true"
        tabIndex={-1}
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
