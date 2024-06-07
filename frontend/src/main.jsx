import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Envuelve la aplicación con BrowserRouter para habilitar el enrutamiento basado en el historial del navegador.
  <BrowserRouter>
    {/* Envuelve la aplicación con StoreContextProvider para proporcionar el contexto global a toda la aplicación. */}
    <StoreContextProvider>
      {/* Renderiza el componente principal de la aplicación. */}
      <App /> 
    </StoreContextProvider>
  </BrowserRouter>
);

