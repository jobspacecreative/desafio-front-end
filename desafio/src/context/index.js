import { createContext, useEffect, useState } from "react";
import getProducts from "../services";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSearch = (value) => {
    console.log(value);
    let finded = products.find((i) => i.name === value);
    console.log(finded);
  };

  const addProductToCart = (product) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((i) => i.id === product.id);

    if (!item) {
      product.qtd = 1;
      copyProductsCart.push(product);
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  };

  const removeProductToCart = (id) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
      setTotalPrice(0);
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  };

  const removeProduct = (id) => {
    const copyProductsCart = [...productsCart];

    const arrayFiltered = copyProductsCart.filter(
      (product) => product.id !== id
    );
    setProductsCart(arrayFiltered);
  };

  const clearCart = () => {
    setProductsCart([]);
    setTotalPrice(0);
  };

  let providerValues = {
    activeCart,
    products,
    productsCart,
    totalPrice,
    setActiveCart,
    addProductToCart,
    removeProductToCart,
    removeProduct,
    clearCart,
    handleSearch,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  );
}
