import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {
  const [isCart, setCart] = useState([]);

  console.log(isCart);

  const addCart = (item, isCount) => {
    const isItem = isCart.find((isCartItem) => isCartItem.id === item.id);

    if (isItem) {
      setCart(
        isCart.map((itemCart) => {
          if (itemCart.id === item.id) {
            return { ...itemCart, cantidad: itemCart.cantidad + isCount };
          } else {
            return itemCart;
          }
        })
      );
    } else {
      setCart([...isCart, { ...item, cantidad: isCount }]);
    }
  };

  const countCart = isCart.reduce((acc, item) => acc + item.cantidad, 0);

  const clearCart = () => {
  setCart([]);
};
  return (
    <CartContext.Provider value={{ addCart, isCart, countCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
