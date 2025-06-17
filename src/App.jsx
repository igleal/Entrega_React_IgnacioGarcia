import { BrowserRouter, useRoutes } from "react-router";
import "./App.css";
import NarBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/itemCatalogo/ItemListContainer.jsx";
import ItemDetailContainer from "./components/itemDetalleCatalogo/ItemDetailContainer.jsx";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <ItemListContainer />,
    },
    {
      path: "/category/:productCategory",
      element: <ItemListContainer />,
    },
    {
      path: "/products/:productId",
      element: <ItemDetailContainer />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <NarBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
