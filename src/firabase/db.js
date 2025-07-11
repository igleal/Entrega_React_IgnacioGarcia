import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProduct = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = [];

  querySnapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
  });
  return productos;
};
