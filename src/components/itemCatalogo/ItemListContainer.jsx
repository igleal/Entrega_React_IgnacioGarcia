import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../firabase/db";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [isData, setData] = useState([]);
  const { productCategory } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const mensajeError = "<span>Falla de la conexion al Servidor..</span>";
      try {
        const productData = await getProduct();

        if (productCategory) {
          const category = productData.filter(
            (item) => item.category === productCategory
          );
          setData(category);
        } else {
          setData(productData);
        }
      } catch (error) {
        return mensajeError;
      }
    };

    fetchData();
  }, [productCategory]);

  return <ItemList data={isData} />;
}

export default ItemListContainer;
