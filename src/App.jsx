import "./App.css";
import NarBar from "./components/NavBar.jsx";
import SectionBody from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NarBar />
      <SectionBody text={"hola este es el props que paso a mi componente"} />
    </>
  );
}

export default App;
