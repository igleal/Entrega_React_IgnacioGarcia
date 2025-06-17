import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [isProduct, setProduct] = useState(null);
  const { productId } = useParams();

  const leerApi = async () => {
    const URL = `https://fakestoreapi.com/products/${productId}`;
    const mensajeError = "<span>Falla de la conexion al Servidor..</span>";

    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      return setProduct(datos);
    } catch (err) {
      return mensajeError;
    }
  };

  useEffect(() => {
    leerApi();
  }, [productId]);

  if (!isProduct) {
    return <div>Cargando...</div>;
  }

  return <ItemDetail item={isProduct} />;
}

export default ItemDetailContainer;
