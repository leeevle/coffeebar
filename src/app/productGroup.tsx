import ProductCard from "./productCard";
import styles from "@/app/ui/product_list.module.css";

export default function ProductGroup({ products, name }) {
    return (
        <div className={styles.container}>
            <h1 className="uppercase text-4xl mb-10 mt-10 capitalize">{name}</h1>
            <div className={styles.productGrid}>
                {products.map((product, index) => (
                <ProductCard key={index} image={product.image} name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
}