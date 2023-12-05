import React, { useState } from "react";

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
    };
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
            <label
              htmlFor="email"
              className="form-label"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </label>
            <input type="text" className="form-control"></input>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.telefono)}
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
