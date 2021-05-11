import React, { useState } from "react";
import '.style/FormContacto.css'
const FormContacto = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { Nombre, email, Mensaje } = e.target.elements;
    let details = {
      Nombre: Nombre.value,
      email: email.value,
      Mensaje: Mensaje.value,
    };
    let response = await fetch("http://localhost:3000/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <div class="login">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Nombre">Nombre:</label>
                    <input class="textarea" type="text" id="Nombre" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input class="textareaDos" type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="Mensaje">Mensaje:</label>
                    <textarea class="textarea" id="Mensaje" required />
                </div>
                <button class="boton" type="submit">{status}</button>
            </form>
      </div>
    
  );
};

export default FormContacto;
