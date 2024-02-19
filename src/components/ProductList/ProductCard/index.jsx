import styles from "./style.module.scss";

export const ProductCard = ({ product, addCart }) => {
    return (
        <li className={styles.listContainer}>
            <div className={styles.imgDiv}>
                <img src={product.img} alt={product.name} />

            </div>
            <div className={styles.textDiv}>
                <h3>{product.name}</h3>
                <span className={styles.category}>{product.category}</span>
                <span className={styles.price}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => { addCart({ name: product.name, category: product.category, price: product.price, img: product.img, id: product.id }) }} >Adicionar</button>
            </div>
        </li>
    )
}