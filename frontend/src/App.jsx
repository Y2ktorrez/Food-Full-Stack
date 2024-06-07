import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

const App = () => { 

  const [showLogin, setShowLogin] = useState(false) // Estado para controlar la visibilidad del popup de login

  return (
    <> {/* Fragmento de React para devolver múltiples elementos sin necesidad de un contenedor adicional */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>} 
      {/* Si showLogin es true, renderiza LoginPopup, sino renderiza un fragmento vacío */}
      <div className='app'> {/* Contenedor principal de la aplicación */}
        <Navbar setShowLogin={setShowLogin}/> 
        {/* Pasa setShowLogin como prop al componente Navbar */}
        <Routes> {/* Renderiza las rutas de la aplicación */}
          <Route path='/' element={<Home />} /> 
          {/* Define la ruta de la página de inicio */}
          <Route path='/cart' element={<Cart />} /> 
          {/* Define la ruta de la página de la cesta */}
          <Route path='/order' element={<PlaceOrder />} /> 
          {/* Define la ruta de la página de realizar pedido */}
        </Routes>
      </div>
      <Footer/> {/* Renderiza el componente Footer al final de la aplicación */}
    </>
  )
}

export default App  

