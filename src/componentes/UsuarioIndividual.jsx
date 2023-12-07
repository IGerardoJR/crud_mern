import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// AOS es una libreria que nos permitira anadir animaciones
import Aos from "aos";
import "aos/dist/aos.css";

function UsuarioIndividual({ usuario }) {
  const navegar = useNavigate();

  // Para animacion de scroll al bajar.
  useEffect(() => {
    Aos.init();
  }, []);

  // Funcion para eliminar usuario.
  function borrarUsuario(idUsuario) {
    axios
      .post("/api/usuario/borrarusuario", { idusuario: idUsuario })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3" data-aos="flip-right">
          <ul className="list-group">
            <li className="list-group-item disabled">{usuario.idusuario}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
            <li className="list-group-item mt-1 mb-2">{usuario.telefono}</li>
          </ul>
          <div align="center">
            <Link to={`/editarUsuario/${usuario.idusuario}`}>
              <li className="btn btn-success">Editar</li>
            </Link>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => borrarUsuario(usuario.idusuario)}
            >
              Borrar
            </button>
            <hr className="mt-4"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
