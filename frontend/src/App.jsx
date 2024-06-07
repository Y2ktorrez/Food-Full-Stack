import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer.jsx'

const App = () => { 
  return (
    <> {/* Fragmento de React para devolver múltiples elementos sin necesidad de un contenedor adicional */}
      <div className='app'> {/* Contenedor principal de la aplicación */}
        <Navbar /> {/* Renderiza el componente Navbar */}
        <Routes> {/* Renderiza las rutas de la aplicación */}
          <Route path='/' element={<Home />} /> {/* Define la ruta de la página de inicio */}
          <Route path='/cart' element={<Cart />} /> {/* Define la ruta de la página de la cesta */}
          <Route path='/order' element={<PlaceOrder />} /> {/* Define la ruta de la página de realizar pedido */}
        </Routes>
      </div>
      <Footer/> {/* Renderiza el componente Footer al final de la aplicación */}
    </>
  )
}

export default App  

