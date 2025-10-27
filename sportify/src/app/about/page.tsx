import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './About.module.css';

export default function About() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>About Sportify</h1>
            <p className={styles.subtitle}>
              Empowering athletes with premium sports equipment and gear for peak performance.
            </p>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              At Sportify, we believe that great equipment elevates performance. Our mission is to provide
              athletes, from beginners to professionals, with the highest quality sports gear that helps them
              achieve their goals and push their limits.
            </p>
          </div>
        </section>

        <section className={styles.values}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.value}>
                <h3>Quality</h3>
                <p>We source only the finest materials and work with trusted manufacturers to ensure every product meets our rigorous standards.</p>
              </div>
              <div className={styles.value}>
                <h3>Innovation</h3>
                <p>We stay ahead of the curve, bringing you the latest technology and design innovations in sports equipment.</p>
              </div>
              <div className={styles.value}>
                <h3>Performance</h3>
                <p>Every piece of equipment is designed to enhance your performance and help you reach your full potential.</p>
              </div>
              <div className={styles.value}>
                <h3>Community</h3>
                <p>We foster a community of athletes who inspire and support each other in their pursuit of excellence.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.placeholderImage}></div>
                <h3>John Smith</h3>
                <p>Founder & CEO</p>
                <p>Former professional athlete with 15+ years in sports industry.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.placeholderImage}></div>
                <h3>Sarah Johnson</h3>
                <p>Head of Product</p>
                <p>Expert in sports equipment design and athlete performance.</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.placeholderImage}></div>
                <h3>Mike Davis</h3>
                <p>Lead Designer</p>
                <p>Creative director specializing in athletic wear and equipment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}