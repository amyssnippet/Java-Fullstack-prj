'use client';

import { useState } from 'react';
import EquipmentCard from './EquipmentCard';
import ProductModal from './ProductModal';
import styles from './EquipmentGrid.module.css';

const equipmentItems = [
  { image: '/images/Nike-Football-1.png', name: 'Nike Football', price: '$25', description: 'Premium quality football for professional play.' },
  { image: '/images/Nike-Football-2.png', name: 'Nike Football Pro', price: '$30', description: 'Advanced design for superior performance.' },
  { image: '/images/Nike-Football-3.png', name: 'Nike Football Elite', price: '$35', description: 'Top-tier football for elite athletes.' },
  { image: '/images/adidas_football-2.png', name: 'Adidas Football', price: '$28', description: 'Classic design with modern technology.' },
  { image: '/images/adidas_football-3.png', name: 'Adidas Football Pro', price: '$32', description: 'Professional grade football equipment.' },
  { image: '/images/babolat-kitback-1.png', name: 'Babolat Kit Bag', price: '$45', description: 'Spacious kit bag for all your equipment.' },
  { image: '/images/babolat-kitback-2.png', name: 'Babolat Kit Bag Pro', price: '$50', description: 'Professional kit bag with premium features.' },
  { image: '/images/babolat-kitback-3.png', name: 'Babolat Kit Bag Elite', price: '$55', description: 'Elite level kit bag for champions.' },
  { image: '/images/babolat-racket-1.png', name: 'Babolat Tennis Racket', price: '$120', description: 'Precision tennis racket for competitive play.' },
  { image: '/images/babolat-racket-2.png', name: 'Babolat Tennis Racket Pro', price: '$140', description: 'Professional tennis racket with advanced technology.' },
  { image: '/images/babolat-racket-3.png', name: 'Babolat Tennis Racket Elite', price: '$160', description: 'Elite tennis racket for tournament champions.' },
  { image: '/images/babolat.png', name: 'Babolat Equipment Set', price: '$200', description: 'Complete tennis equipment set for serious players.' },
  { image: '/images/victor-racket-1.png', name: 'Victor Badminton Racket', price: '$80', description: 'High-performance badminton racket.' },
  { image: '/images/victor-racket-2.png', name: 'Victor Badminton Racket Pro', price: '$90', description: 'Professional badminton racket design.' },
  { image: '/images/victor-racket-3.png', name: 'Victor Badminton Racket Elite', price: '$100', description: 'Elite badminton racket for champions.' },
  { image: '/images/yonex-badminton-1.png', name: 'Yonex Badminton Set', price: '$60', description: 'Complete badminton set for beginners and intermediates.' },
  { image: '/images/yonex-badminton-2.png', name: 'Yonex Badminton Set Pro', price: '$70', description: 'Professional badminton equipment set.' },
  { image: '/images/yonex-badminton-3.png', name: 'Yonex Badminton Set Elite', price: '$80', description: 'Elite badminton set for competitive players.' },
  { image: '/images/yonex-kitback-1.png', name: 'Yonex Kit Bag', price: '$40', description: 'Durable kit bag for badminton equipment.' },
  { image: '/images/yonex-kitback-2.png', name: 'Yonex Kit Bag Pro', price: '$45', description: 'Professional kit bag with extra compartments.' },
  { image: '/images/yonex-kitback-3.png', name: 'Yonex Kit Bag Elite', price: '$50', description: 'Elite kit bag for tournament players.' },
  { image: '/images/yonex-racket-1.png', name: 'Yonex Badminton Racket', price: '$75', description: 'Precision badminton racket for all levels.' },
  { image: '/images/yonex-racket-2.png', name: 'Yonex Badminton Racket Pro', price: '$85', description: 'Professional badminton racket technology.' },
  { image: '/images/yonex-racket-3.png', name: 'Yonex Badminton Racket Elite', price: '$95', description: 'Elite badminton racket for champions.' },
];

export default function EquipmentGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Equipment</h2>
        <div className={styles.grid}>
          {equipmentItems.map((item, index) => (
            <EquipmentCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              onClick={() => handleProductClick(item)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </section>
  );
}