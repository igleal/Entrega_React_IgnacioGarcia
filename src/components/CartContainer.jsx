import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout";

function CartContainer() {
  const { isCart, clearCart } = useContext(CartContext);
  const [viewModal, setViewModal] = useState(false);

  if (isCart.length === 0) {
    return <p className="text-center mt-10 text-lg">El carrito está vacío.</p>;
  } else {
    return (
      <div className="flex flex-col items-center px-4 py-8">
        <div className="bg-amber-100 p-10 rounded">
          {isCart.map((item, index) => (
            <article
              key={index}
              className="flex w-full max-w-lg bg-amber-200 shadow-md rounded p-4 mb-6 gap-4"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
              </div>

              <div className="flex flex-col justify-between gap-2">
                <span>{item.title}</span>
                <span>Precio Individual: ${item.price}</span>
                <span>Subtotal: </span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">
                  -
                </button>
                <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">
                  +
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Eliminar
                </button>
              </div>
            </article>
          ))}
          <div className="w-full max-w-lg text-right mt-4">
            <p className="text-lg font-semibold mb-4">Total: 1000$</p>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setViewModal(true)}
            >
              Finalizar compra
            </button>
          </div>

          <Checkout
            viewOn={viewModal}
            viewOff={() => setViewModal(false)}
            clear={clearCart}
          />
        </div>
      </div>
    );
  }
}

export default CartContainer;
