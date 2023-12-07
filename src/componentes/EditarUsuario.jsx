import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Libreria para ventanas emergentes
import Swal from "sweetalert2";
function EditarUsuario() {
  const params = useParams();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // Para volver atras al index.
  const navegar = useNavigate();
  useEffect(() => {
    axios
      .post("/api/usuario/obtenerdatausuario", {
        idusuario: params.idusuario,
        nombre: params.nombre,
        email: params.email,
        telefono: params.telefono,
      })
      .then((res) => {
        console.log(res.data[0]);
        const datausuario = res.data[0];
        setNombre(datausuario.nombre);
        setEmail(datausuario.email);
        setTelefono(datausuario.telefono);
      });
  }, []);

  // Funcion que actualice.
  function editarUsuario() {
    // Nuevo objeto para actualizar el usuario.
    const actualizarusuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario,
    };

    console.log(actualizarusuario);
    // Hacer la peticion usando axios.
    axios
      .post("/api/usuario/actualizausuario", actualizarusuario)
      .then((res) => {
        // alert(res.data);
        navegar("/");
        Swal.fire(
          "Actualizacion",
          "El usuario se ha actualizado, regresara a la pagina de inicio."
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar usuario</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          {/* Id del usuario */}
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              IdUsuario
            </label>

            <input
              type="text"
              className="form-control disabled"
              style={{ backgroundColor: "var(--bs-gray-200)" }}
              value={params.idusuario}
            ></input>
          </div>

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
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

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
            <button className="btn btn-success" onClick={editarUsuario}>
              Editar usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
