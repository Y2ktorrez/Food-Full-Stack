import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className='header'> {/* Contenedor principal del encabezado */}
        <div className="header-contents"> {/* Contenido del encabezado */}
          <h2>Order your favourite food here</h2> {/* Título del encabezado */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sequi aliquam facilis libero, officiis eum minus temporibus animi, est ratione doloribus. Ratione omnis ex eligendi qui porro officia quis consequatur.</p> {/* Texto descriptivo del encabezado */}
          <button>View Menu</button> {/* Botón para ver el menú */}
        </div>
      </div>
    );
  }
  
export default Header
