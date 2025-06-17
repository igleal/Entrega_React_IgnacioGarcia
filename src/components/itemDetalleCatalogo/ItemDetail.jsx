import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <article className="w-lg my-4 md:w-[1024px] md:min-h-[512px] flex flex-col md:flex-row bg-amber-200 rounded-xl">
        <div className="m-4 md:w-1/2 flex justify-center items-center">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-2xl w-[300px] max-h-[400px] object-fill"
          />
        </div>

        <div className="flex flex-col p-8 md:w-1/2 bg-amber-50 rounded-r-xl">
          <span className="text-gray-800 text-sm mb-2 font-semibold">
            {item.category}
          </span>
          <span className="text-2xl font-semibold text-gray-800 mb-4">
            {item.title}
          </span>
          <span className="text-3xl font-extralight text-gray-800">
            $ {item.price}
          </span>
          <span className="mt-8">{item.description}</span>

          <ItemCount />
          <button className=" rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold">
            Comprar Ahora
          </button>
          <button className="mt-2 rounded-lg bg-blue-400 hover:bg-blue-800 text-white px-4 py-2 font-semibold">
            Añadir al Carrito
          </button>
        </div>
      </article>
    </div>
  );
}

export default ItemDetail;
