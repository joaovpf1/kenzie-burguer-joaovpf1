import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addCart }) => {
   return (
      <ul className={styles.containerList}>
         {productList.map((product) => (
            <ProductCard addCart={addCart} key={product.id} product={product} />
         ))}
      </ul>
   );
};
