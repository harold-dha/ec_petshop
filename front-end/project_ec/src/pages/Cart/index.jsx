import { Button, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { GridProducts, ListProducts } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { cart, totalCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  async function placeOrder() {
    const order = {
      user_id: user.id,
      create_at: new Date(),
    };
  }

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  return (
    <>
      <ListProducts list={products} />
    </>
  );
};

export default Cart;
