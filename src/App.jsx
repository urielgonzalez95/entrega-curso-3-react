import NavBar from "./componentes/navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido/a a Mi Tienda! Explora nuestros productos." />
    </>
  );
}

export default App;
