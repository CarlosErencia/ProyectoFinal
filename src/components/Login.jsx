import React from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const Login = () => {

  const responseFacebook = (response) => {
    console.log(response);
  }

    const responseGoogle = (response) => {
        console.log(response);
      }

    return (
       <div className="App login">
         <div class="Google">
          <GoogleLogin 
            clientId="831405529059-rpn2t8cetre42e7qjst57alphauch37d.apps.googleusercontent.com"
            buttonText="Iniciar Sesion"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
         </div>
         <div class="facebook">
          <FacebookLogin
            appId="2043028465844725"
            fields="name,email,picture"
            scope="public_profile,user_friends"
            callback={responseFacebook}
            icon="fa-facebook" 
          />
         </div>
         <div class="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
          <h1>Registro Manual</h1>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required></input>

          <label for="psw"><b>Contraseña</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

          <button type="submit" class="btn">Aceptar</button>
          <button type="submit" class="btn cancel" onclick="closeForm()">Cancelar</button>
        </form>
        </div>
        </div>
    )
  }
export default Login
