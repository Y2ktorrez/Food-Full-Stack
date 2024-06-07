import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'> {/* Contenedor principal del pie de página */}
            <div className='footer-content'> {/* Contenedor para el contenido del pie de página */}
                <div className='footer-content-left'> {/* Contenedor para la sección izquierda del pie de página */}
                    <img src={assets.logo} alt="" /> {/* Logo de la compañía */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod corporis earum alias facilis ratione dicta? Reprehenderit exercitationem error perferendis, laudantium maxime accusantium odit, incidunt officiis ex quo dolore libero. Eum.</p> {/* Texto de descripción */}
                    <div className="footer-social-icons"> {/* Contenedor para los íconos de redes sociales */}
                        <img src={assets.facebook_icon} alt="" /> {/* Ícono de Facebook */}
                        <img src={assets.twitter_icon} alt="" /> {/* Ícono de Twitter */}
                        <img src={assets.linkedin_icon} alt="" /> {/* Ícono de LinkedIn */}
                    </div>
                </div>
                <div className="footer-content-center"> {/* Contenedor para la sección central del pie de página */}
                    <h2>COMPANY</h2> {/* Título de la sección */}
                    <ul> {/* Lista de enlaces de la empresa */}
                        <li>Home</li> {/* Enlace a la página de inicio */}
                        <li>About us</li> {/* Enlace a la página "Sobre nosotros" */}
                        <li>Delivey</li> {/* Enlace a la página de entrega */}
                        <li>Privacy policy</li> {/* Enlace a la política de privacidad */}
                    </ul>
                </div>
                <div className="footer-content-right"> {/* Contenedor para la sección derecha del pie de página */}
                    <h2>GET IN TOUCH</h2> {/* Título de la sección */}
                    <ul> {/* Lista de información de contacto */}
                        <li>+591 75612841</li> {/* Número de teléfono */}
                        <li>andrestorrezvaca@gmail.com</li> {/* Dirección de correo electrónico */}
                    </ul>
                </div>
            </div>
            <hr /> {/* Línea horizontal para separar el contenido del pie de página del texto de derechos de autor */}
            <p className='footer-copyright'> {/* Texto de derechos de autor */}
                Copyright 2024 Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
