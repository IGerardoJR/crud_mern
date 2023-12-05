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
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);
  return (
    <div>
      <h2>Lista de usuarios</h2>
      <UsuarioIndividual />
    </div>
  );
}

export default ListaUsuarios;
