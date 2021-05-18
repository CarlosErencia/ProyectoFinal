import React, { useState } from "react";
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
     <div class="formContacto">
        <form action="#" target="" method="get" name="formDatosPersonales">

          <label for="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder=""/>

          <label for="apellidos">Apellidos</label>
          <input type="text" name="apellidos" id="apellidos" placeholder=""/>

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="" required />

          <label for="asunto">Asunto</label>
          <input type ="text" name="asunto" id="asunto" placeholder=""/>

          <label for="mensaje">Mensaje</label>
          <textarea name="mensaje" for="mensaje" placeholder="Máximo 300 caracteres" maxlength="300"></textarea>

          <input type="submit" name="enviar" value="Enviar datos"></input>
        </form>
      </div>
    
  );
};

export default FormContacto;
