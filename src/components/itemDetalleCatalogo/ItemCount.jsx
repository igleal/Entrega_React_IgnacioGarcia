import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemCount({ item }) {
  const { addCart } = useContext(CartContext);

  const [isCount, setCount] = useState(1);

  const moreCount = () => setCount(isCount + 1);

  const lessCount = () => setCount(isCount > 1 ? isCount - 1 : 1);

  const cartAdd = () => {
    addCart(item, isCount);
    setCount(1);
  };

  return (
    <div className="my-4 p-1 flex bg-amber-100 items-center justify-center gap-4">
      <span className="text-2xl font-extralight text-gray-800">
        Cantidad: {isCount} uds.
      </span>
      <button
        className="rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold"
        onClick={lessCount}
      >
        -
      </button>
      <button
        className="rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold"
        onClick={moreCount}
      >
        +
      </button>
      <button
        className="mt-2 rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold"
        onClick={cartAdd}
      >
        Añadir al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
