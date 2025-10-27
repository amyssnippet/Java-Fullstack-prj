import styles from './FeaturedSplitSection.module.css';

export default function FeaturedSplitSection() {
  return (
    <section className={styles.section}>
      <div className={styles.splitRow}>
        <div className={styles.splitItem}>
          <img src="/front-page/img-6.avif" alt="LeBron James" className={styles.image} />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Athlete Picks</h2>
            <p className={styles.description}>Give your hoop dreams the royal treatment.</p>
            <button className={styles.button}>Shop</button>
          </div>
        </div>
        <div className={styles.splitItem}>
          <img src="/front-page/img-1.avif" alt="Featured Collection" className={styles.image} />
          <div className={styles.overlay}>
            <h2 className={styles.title}>FEATURED</h2>
            <p className={styles.description}>Discover the latest in sports performance.</p>
            <button className={styles.button}>Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
}