import { useNavigate } from "react-router";

function ItemList({ data }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-4 pt-4">

      {data.map((producto) => (
        <article
          key={producto.id}
          className="flex flex-col bg-indigo-200 shadow-md rounded-lg p-4 min-w-sm max-w-sm"
        >
          <img
            src={producto.image}
            alt={producto.title}
            className="w-48 object-cover rounded-t-lg mb-4 mx-auto"
          />
          <span>Titulo: {producto.title}</span>
          <span>Categoria: {producto.category}</span>
          <span>Precio: {producto.price}</span>
          <button
            className="px-4 py-2 rounded-lg bg-lime-400 hover:bg-lime-600 duration-600 text-sm"
            onClick={() => navigate(`/products/${producto.id}`)}
          >
            Ver Mas
          </button>
        </article>
      ))}
    </div>
  );
}

export default ItemList;
