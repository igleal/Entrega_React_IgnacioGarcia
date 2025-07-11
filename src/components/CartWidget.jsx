import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  const { countCart } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <FaShoppingCart />
      </Link>
      <span className="flex justify-center items-center -mt-2 h-4 w-4 text-xs text-black bg-white rounded-full">
        {countCart}
      </span>
    </>
  );
}

export default CartWidget;
