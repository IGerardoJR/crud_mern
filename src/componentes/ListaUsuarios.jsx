import React from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import { useState, useEffect } from "react";
import axios from "axios";
function ListaUsuarios() {
  const [dataUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .get("api/usuario/obtenerUsuarios")
        .then((res) => {
          // console.log(res.data);
          console.log(res);
          console.log(res.data);
          console.log(res.headers);

          setDataUsuarios(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  // Mapear listausuario en objeto usuario
  const listausuarios = dataUsuarios.map((usuario) => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });
  return (
    <div>
      <h2>Lista de usuarios</h2>
      {listausuarios}
    </div>
  );
}

export default ListaUsuarios;
