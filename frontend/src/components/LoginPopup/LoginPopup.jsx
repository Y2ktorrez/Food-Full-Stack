import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => { // Define el componente LoginPopup y recibe setShowLogin como prop

  const [currState, setCurrState] = useState("Login") // Define un estado para manejar el estado actual (Login o Sign Up)

  return (
    <div className='login-popup'> {/* Contenedor principal del popup de login */}
      <form className='login-popup-container'> {/* Formulario del popup de login */}
        <div className='login-popup-title'> {/* Título del popup de login */}
          <h2>{currState}</h2> {/* Muestra el estado actual (Login o Sign Up) */}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" /> {/* Icono de cierre para cerrar el popup */}
        </div>
        <div className='login-popup-inputs'> {/* Contenedor para los inputs del formulario */}
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />} {/* Input de nombre solo si está en estado Sign Up */}
          <input type="email" placeholder='Your email' required /> {/* Input de email */}
          <input type="password" placeholder='Password' required /> {/* Input de contraseña */}
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button> {/* Botón para enviar el formulario */}
        <div className='login-popup-condition'> {/* Contenedor para la condición de términos y políticas */}
          <input type="checkbox" required /> {/* Checkbox para aceptar términos y políticas */}
          <p>By continuing, i agree to the terms of use & privacy policy.</p> {/* Texto de términos y políticas */}
        </div>
        {currState === "Login"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>  
          : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p> 
        }
        {/* Link para cambiar a Sign Up */}
        {/* Link para cambiar a Login */}
      </form>
    </div>
  )
}

export default LoginPopup
