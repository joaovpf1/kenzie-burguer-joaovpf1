import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li className={styles.container}>
         <div className={styles.listItem}>
            <div>
               <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
         </div>
         <button onClick={() => { removeCart(product.id) }} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
