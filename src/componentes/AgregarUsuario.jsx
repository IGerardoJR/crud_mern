import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
function AgregarUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const agregar = () => {
    // console.log("Agregando el usuario");

    let usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniqid(),
    };

    console.log(usuario);
    axios
      .post("api/usuario/agregarUsuario", usuario)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Crear un nuevo usuario</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" className="form-control"></input>
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              ></input>
            </div>
            {/*  */}
            <button className="btn btn-success" onClick={agregar}>
              Guardar usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarUsuario;
