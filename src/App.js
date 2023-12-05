import "./App.css";
import AgregarUsuario from "./componentes/AgregarUsuario";
import EditarUsuario from "./componentes/EditarUsuario";
import ListaUsuarios from "./componentes/ListaUsuarios";
import UsuarioIndividual from "./componentes/UsuarioIndividual";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="/agregarUsuario" element={<AgregarUsuario />}></Route>
          <Route path="/editarUsuario" element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
