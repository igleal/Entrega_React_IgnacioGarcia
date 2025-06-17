import { useState } from "react";

function ItemCount() {
  const [isCount, setCount] = useState(1);

  return (
    <div className="my-4 p-1 flex bg-amber-100 items-center justify-center gap-4">
      <span className="text-2xl font-extralight text-gray-800">Cantidad: {isCount} uds.</span>
      <button
        className="rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold"
        onClick={() => setCount(isCount > 1 ? isCount - 1 : 1)}
      >
        -
      </button>
      <button
        className="rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold"
        onClick={() => setCount(isCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
