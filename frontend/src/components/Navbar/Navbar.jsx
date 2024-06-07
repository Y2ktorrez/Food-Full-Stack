import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => { // Define el componente Navbar y recibe setShowLogin como prop

    const [menu, setMenu] = useState(""); // Estado para controlar el menú activo
    const { getTotalCartAmount } = useContext(StoreContext); // Obtiene la función getTotalCartAmount del contexto del almacenamiento

    return (
        <div className='navbar'> {/* Contenedor principal de la barra de navegación */}
            <Link to='/'> {/* Enlace a la página de inicio */}
                <img src={assets.logo} alt="" className="logo" /> {/* Logo de la compañía */}
            </Link>
            <ul className='navbar-menu'> {/* Lista de navegación */}
                {/* Enlaces a diferentes secciones de la página */}
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className='navbar-right'> {/* Contenedor para los elementos de la derecha */}
                <img src={assets.search_icon} alt="" /> {/* Icono de búsqueda */}
                <div className='navbar-search-icon'> {/* Contenedor para el icono de la cesta o carrito */}
                    <Link to='/cart'> {/* Enlace al carrito */}
                        <img src={assets.basket_icon} alt="" /> {/* Icono del carrito */}
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div> {/* Indicador visual como un punto rojo que indica la cantidad de elementos en el carrito */}
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button> {/* Botón de inicio de sesión que muestra el popup de login */}
            </div>
        </div>
    )
}

export default Navbar
