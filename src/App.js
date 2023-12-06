import "./App.css";
import AgregarUsuario from "./componentes/AgregarUsuario";
import EditarUsuario from "./componentes/EditarUsuario";
import ListaUsuarios from "./componentes/ListaUsuarios";
import UsuarioIndividual from "./componentes/UsuarioIndividual";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="/agregarUsuario" element={<AgregarUsuario />}></Route>
          <Route
            path="/editarUsuario/:idusuario"
            element={<EditarUsuario />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
