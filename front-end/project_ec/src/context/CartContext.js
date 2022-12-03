import { createContext, useState } from "react";
// import { get } from "../services";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const { children } = props;

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  function addCart(item) {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function removeCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function totalCart() {
    let suma = 0;
    cart.map((item) => {
      suma += +item.precio_producto;
    });
    return suma;
  }
  function totalNeto() {
    let suma = 0;
    let igv = 0.18;
    let sumaInicial = 0;
    let total = 0;
    cart.map((item) => {
      sumaInicial += +item.precio_producto;
      suma += +item.precio_producto * igv;
      total += sumaInicial + suma;
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{ cart, addCart, removeCart, totalCart, totalNeto }}
    >
      {children}
    </CartContext.Provider>
  );
};
