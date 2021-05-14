import React from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './style/Login.css'

const Login = () => {

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('containerLogin');

  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });
  
    return (
       <div className="Applogin">
         <div class="BotonesLogin">
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
        
         </div>
          <div class="containerLogin" id="container">
            <div class="form-container sign-up-container">
              <form action="#">
                <h1>Registrate</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <button>Registrate</button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Iniciar Sesion</h1>
                <span>Introduce los datos</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <a href="#">No recuerdas la contraaseña?</a>
                <button>Iniciar Sesion</button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hola, Amig@ !</h1>
                  <p>Ingrese sus datos personales y comience su viaje con nosotros</p>
                  <button class="ghost" id="signUp">Registrarse</button>
                </div>
              </div>
            </div>
          </div> 
            
        </div>
    )
  }
export default Login