import styles from "@/app/ui/product_card.module.css"
import Image from "next/image";


export default function ProductCard({ image, name, price }) {
  return (
      <div className={styles.card}>
        <div className='self-center'>
          <div className={styles.image}>
            <Image
            width='350'
            height='300'
            src={image}
            alt={name}
            />
            <Image
            width='450'
            height='450'
            src='/navigation/white_cart.svg'
            alt='buy icon'
            className={styles.cart_icon}
            />

          </div>
          <div className={styles.details}>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{price} грн</p>
          </div>
        </div>
      </div>
    );
}