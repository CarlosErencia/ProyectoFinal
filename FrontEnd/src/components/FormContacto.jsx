import React, { useState } from "react";
import './style/FormContacto.css';

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
    <div class="containercontacto">
    <h1 class="tituloform">Contacta con nosotros!</h1>
    <form>
        <ul>
            <li>
                <label for="name"><span>Nombre: <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name" required></input>
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email" required></input>
            </li>
            <li>
                <label for="mail"><span>Asunto: <span class="required-star">*</span></span></label>
                <input type="text" id="asunto" name="user_asunto" required></input>
            </li>
            <li>
                <label for="msg"><span>Mensaje: <span class="required-star">*</span></span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="submit"></input>
            </li>
        </ul>
    </form>
</div>
  );
};

export default FormContacto;
