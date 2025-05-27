import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <>
      <FaShoppingCart />
      <span className="flex justify-center items-center -mt-2 h-4 w-4 text-xs text-black bg-white rounded-full">1</span>
    </>
  );
}

export default CartWidget;
