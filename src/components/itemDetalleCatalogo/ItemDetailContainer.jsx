import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../firabase/db";

function ItemDetailContainer() {
  const [isProduct, setProduct] = useState(null);
  const { productId } = useParams();

  const leerApi = async () => {
    const mensajeError = "<span>Falla de la conexion al Servidor..</span>";

    try {
      const productData = await getProduct();
      const dataProduct = productData.find((item) => item.id === productId);
      setProduct(dataProduct);
    } catch (error) {
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
