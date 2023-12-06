import React from "react";
import { useParams } from "react-router-dom";
function EditarUsuario() {
  const params = useParams();

  return (
    <div>
      <h2>EditarUsuario</h2>
      <h3>El ID del usuario es: {params.idusuario}</h3>
    </div>
  );
}

export default EditarUsuario;
