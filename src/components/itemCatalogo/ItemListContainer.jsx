import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [isData, setData] = useState([]);
  const { productCategory } = useParams();

  useEffect(() => {
    if (productCategory) {
      fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
        .then((response) => response.json())
        .then((response) => setData(response));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response) => setData(response));
    }
  }, [productCategory]);

  return <ItemList data={isData} />;
}

export default ItemListContainer;
