import { createContext, useEffect, useMemo, useState } from "react";
import getProducts from "../services";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState('')
  const [totalPrice, setTotalPrice] = useState(0);

  const loadProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const productsFiltered = useMemo(()=>{
    const lowerSearch = filteredProducts.toLowerCase();
    return products.filter((product)=>{
      return product.name.toLowerCase().includes(lowerSearch)
    })
  }, [filteredProducts, products])

  let initialPrice = totalPrice;
  const incrementPrice = (price) => {
    initialPrice += Number(price);
    setTotalPrice(initialPrice);
  };

  const decrementPrice = (price) => {
    initialPrice -= Number(price);
    setTotalPrice(initialPrice);
  };

  const addProductToCart = (product) => {
    const copyProductsCart = [...productsCart];
    incrementPrice(product.price);

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
    decrementPrice(item.price);

    if (item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
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

    const item = copyProductsCart.find((i) => i.id === id);
    const totalPriceItem = item.price * item.qtd;
    const newPrice = totalPrice - totalPriceItem;

    setProductsCart(arrayFiltered);
    setTotalPrice(newPrice);
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
    productsFiltered,
    setActiveCart,
    addProductToCart,
    removeProductToCart,
    removeProduct,
    clearCart,
    setFilteredProducts,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={providerValues}>
      {children}
    </CartContext.Provider>
  );
}
