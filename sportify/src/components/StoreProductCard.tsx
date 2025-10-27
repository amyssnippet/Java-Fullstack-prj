import styles from './StoreProductCard.module.css';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
}

interface StoreProductCardProps {
  product: Product;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function StoreProductCard({ product, isHovered, onHover, onLeave }: StoreProductCardProps) {
  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        {isHovered && (
          <button className={styles.quickShopButton}>
            Quick Shop
          </button>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
      </div>
    </div>
  );
}