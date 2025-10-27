import styles from './EquipmentCard.module.css';

interface EquipmentCardProps {
  image: string;
  name: string;
  price?: string;
  onClick?: () => void;
}

export default function EquipmentCard({ image, name, price, onClick }: EquipmentCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {price && <p className={styles.price}>{price}</p>}
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}