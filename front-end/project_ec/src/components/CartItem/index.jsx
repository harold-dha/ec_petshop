import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
// import FormatPrice from "../FormatPrice";
// import CartAmountToggle from "./CartAmountToggle";
// import { useCartContext } from "../context/cart_context";

const CartItem = ({
  id,
  nombre_producto,
  url_producto,
  color,
  precio_producto,
  amount,
}) => {
  //   const { removeItem, setDecrease, setIncrement } = useCartContext();
  const { removeCart, totalCart } = useContext(CartContext);

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={url_producto} alt={id} />
          </figure>
        </div>
        <div>
          <p>{nombre_producto}</p>
        </div>
      </div>
      {/* precio */}
      <div className="cart-hide">
        <p>{precio_producto}</p>
      </div>
      <div>
        <p>{1}</p>
      </div>

      {/* cantidad */}
      {/* <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      /> */}
      {/* <div className="data-01">
        <div>Prueba</div>
      </div> */}
      {/* precio */}
      <div className="cart-hide">
        <p>{precio_producto * 1}</p>
      </div>
      {/* actiones */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeCart(id)} />
      </div>
    </div>
  );
};

export default CartItem;
