import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burguerApi } from "../../service/api.js";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const savedCartList = localStorage.getItem('@CARTLIST');
   const [cartList, setCartList] = useState(
      savedCartList ? JSON.parse(savedCartList) : []
   );
   const [visible, setVisible] = useState(false);
   const [search, setSearch] = useState("");
   const [filterList, setFilterList] = useState([])

   useEffect(() => {
      const getBurguers = async () => {
         try {
            const { data } = await burguerApi.get("/products");
            setProductList(data);
            localStorage.setItem('@BURGUERLIST', JSON.stringify(productList));
            setFilterList(data)
         } catch (error) {
            console.log(error);
            toast.error('Algo deu errado, tente novamente!')
         }
      }
      getBurguers();
   }, []);

   useEffect(() => {
      localStorage.setItem('@CARTLIST', JSON.stringify(cartList))
   }, [cartList])

   const addCart = (selectedBurguer) => {
      if (!cartList.some(burguer => burguer.id === selectedBurguer.id)) {
         setCartList([...cartList, selectedBurguer]);
         toast.success('Burguer adicionado ao carrinho!')
      } else {
         toast.error('Burguer já adicionado.')
      }
   }

   const removeCart = (burguerId) => {
      const newBurguerList = cartList.filter((burguer) => burguer.id !== burguerId);
      setCartList(newBurguerList);
      toast.success('Burguer removido .-.')
   };

   const removeAll = () => {
      setCartList([]);
      toast.success('Carrinho está limpo!')
   }

   const closeModal = () => {
      setVisible(false);
   }

   useEffect(() => {
      const productFilter = productList.filter((burguer) => {
         return burguer.name.toLowerCase().includes(search.toLowerCase())
      })
      setFilterList(productFilter)
   }, [search])

   return (
      <>
         <Header setSearch={setSearch} setVisible={setVisible} cartList={cartList} />
         <main>
            <ProductList
               productList={filterList}
               addCart={addCart}
            />
            {visible ? <CartModal
               closeModal={closeModal}
               removeCart={removeCart}
               removeAll={removeAll}
               cartList={cartList} /> :
               null}
         </main>
      </>
   );
};
