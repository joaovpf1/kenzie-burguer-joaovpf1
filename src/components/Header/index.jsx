import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ cartList, setVisible, setSearch }) => {
   const [value, setValue] = useState("");
   const handleSearch = (e) => {
      e.preventDefault();
      setSearch(value)
   }

   return (
      <header className={styles.container}>
         <div>
            <div className={styles.logoDiv}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
               <button onClick={() => setVisible(true)} className={styles.cardBttn}>
                  <MdShoppingCart size={21} />
                  <span>{cartList.length}</span>
               </button>

            </div>
            <div className={styles.formSection}>
               <form onSubmit={handleSearch}>
                  <input
                     placeholder="Digitar Pesquisa"
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
