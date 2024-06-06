import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState(""); /* Estado para controlar el menú activo */

  return (
    <div className='navbar'>     {/* Contenedor principal de la barra de navegación */} 
        <img src={assets.logo} alt="" className="logo" />  {/* Logo de la compañia */}
        <ul className='navbar-menu'>  {/* Lista de navegación */} 
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active": ""}>home</li> {/* Enlace de navegación */}  
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active": ""}>menu</li>  {/* Enlace de navegación */}  
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active": ""}>mobile app</li>  {/* Enlace de navegación */}  
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active": ""}>contact us</li> {/* Enlace de navegación */}  
        </ul>
        <div className='navbar-right'> {/* Contenedor para los elementos de la derecha */} 
            <img src={assets.search_icon} alt="" />  {/* Icono de búsqueda */}
            <div className='navbar-search-icon'>     {/* Contenedor para el icono de la cesta o carrito */}
                <img src={assets.basket_icon} alt="" /> {/* Icono del carrito */}
                <div className="dot"></div>            {/* Indicador visual como un punto rojo */}
            </div>
            <button>sign in</button>  {/* Botón de inicio de sesión */}
        </div>
    </div>
  )
}

export default Navbar
