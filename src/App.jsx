import { Bienvenida } from "./components/Bienvenida";
import { CajaChildren } from "./components/CajaChildren";
import {
  ComponenteMap,
  ComponenteMapEarlyReturn,
} from "./components/ComponenteMap";
import { ComponentePadre } from "./components/ComponentePadre";

function App() {
  return (
    <>
      <Bienvenida />
      <ComponentePadre titulo={"Titulo del componente Padre"} />
      <CajaChildren>
        <p>Este es el contenido pasado por children</p>
        <h2>Hola</h2>
        <button>Boton</button>
      </CajaChildren>

      <ComponenteMapEarlyReturn />
    </>
  );
}

export default App;
