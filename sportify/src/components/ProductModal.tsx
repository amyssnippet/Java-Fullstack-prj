import styles from './ProductModal.module.css';

interface ProductModalProps {
  product: {
    image: string;
    name: string;
    price: string;
    description: string;
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        <div className={styles.content}>
          <img src={product.image} alt={product.name} className={styles.image} />
          <div className={styles.details}>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}