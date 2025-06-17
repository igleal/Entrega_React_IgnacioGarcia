import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [isProduct, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, [productId]);

  if (!isProduct) {
    return <div>Cargando...</div>;
  }

  return <ItemDetail item={isProduct} />;
}

export default ItemDetailContainer;
