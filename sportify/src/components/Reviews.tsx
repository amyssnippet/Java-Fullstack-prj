'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Sportify has the best selection of sports equipment. The quality is unmatched and the prices are reasonable.',
    avatar: '/images/avatar-1.jpg'
  },
  {
    name: 'Mike Chen',
    rating: 5,
    text: 'Fast shipping and excellent customer service. I\'ve been a loyal customer for years.',
    avatar: '/images/avatar-2.jpg'
  },
  {
    name: 'Emma Davis',
    rating: 5,
    text: 'The equipment I purchased exceeded my expectations. Highly recommend Sportify to all athletes.',
    avatar: '/images/avatar-3.jpg'
  },
  {
    name: 'James Wilson',
    rating: 5,
    text: 'Great variety and the website is easy to navigate. Found exactly what I needed for my training.',
    avatar: '/images/avatar-4.jpg'
  },
  {
    name: 'Lisa Rodriguez',
    rating: 5,
    text: 'Professional grade equipment at affordable prices. Sportify is my go-to for all sports gear.',
    avatar: '/images/avatar-5.jpg'
  }
];

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !visibleReviews.includes(index)) {
            setTimeout(() => {
              setVisibleReviews(prev => [...prev, index]);
            }, index * 200); // Stagger the animations
          }
        });
      },
      { threshold: 0.1 }
    );

    reviewRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleReviews]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Customers Say</h2>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div
              key={index}
              ref={(el) => { reviewRefs.current[index] = el; }}
              className={`${styles.reviewCard} ${visibleReviews.includes(index) ? styles.visible : ''}`}
            >
              <div className={styles.rating}>
                {renderStars(review.rating)}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.author}>
                <img src={review.avatar} alt={review.name} className={styles.avatar} />
                <span className={styles.name}>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}