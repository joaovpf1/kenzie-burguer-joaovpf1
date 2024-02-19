import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeCart, removeAll, closeModal }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={styles.container}>
         <section>
            <div className={styles.dialogHeader}>
               <h2>Carrinho de compras</h2>
               <button onClick={closeModal} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.dialogList}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard removeCart={removeCart} key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className={styles.dialogBottom}>
               <div>
                  <span className={styles.textTotal}>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={removeAll}>Remover todos</button>
            </div>
         </section>
      </div>
   );
};
