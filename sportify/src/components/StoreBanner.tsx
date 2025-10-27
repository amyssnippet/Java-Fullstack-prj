import styles from './StoreBanner.module.css';

export default function StoreBanner() {
  return (
    <section className={styles.banner}>
      <img
        src="/front-page/lebron-james.avif"
        alt="LeBron James"
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>LeBron James</h1>
      </div>
    </section>
  );
}