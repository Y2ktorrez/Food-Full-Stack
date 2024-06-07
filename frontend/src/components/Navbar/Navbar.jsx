import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => { // Define el componente Navbar y recibe setShowLogin como prop

    const [menu, setMenu] = useState(""); /* Estado para controlar el menú activo */

    return (
        <div className='navbar'>     {/* Contenedor principal de la barra de navegación */}
            <img src={assets.logo} alt="" className="logo" />  {/* Logo de la compañía */}
            <ul className='navbar-menu'>  {/* Lista de navegación */}
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>  {/* Enlace a la página de inicio */}
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>  {/* Enlace a la sección del menú */}
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>  {/* Enlace a la sección de descarga de la app */}
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>  {/* Enlace a la sección de contacto */}
            </ul>
            <div className='navbar-right'> {/* Contenedor para los elementos de la derecha */}
                <img src={assets.search_icon} alt="" />  {/* Icono de búsqueda */}
                <div className='navbar-search-icon'>     {/* Contenedor para el icono de la cesta o carrito */}
                    <img src={assets.basket_icon} alt="" /> {/* Icono del carrito */}
                    <div className="dot"></div>            {/* Indicador visual como un punto rojo */}
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>  {/* Botón de inicio de sesión que muestra el popup de login */}
            </div>
        </div>
    )
}

export default Navbar
