import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StoreBanner from '../../components/StoreBanner';
import StoreGrid from '../../components/StoreGrid';

export default function Store() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <StoreBanner />
        <StoreGrid />
      </main>
      <Footer />
    </div>
  );
}