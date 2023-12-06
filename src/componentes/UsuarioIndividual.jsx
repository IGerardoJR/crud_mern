import React from "react";
import { Link } from "react-router-dom";

function UsuarioIndividual({ usuario }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
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
            <button className="btn btn-danger">Borrar</button>
            <hr className="mt-4"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
