import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => { // Define el componente AppDownload
    return (
        <div className='app-download' id='app-download'> {/* Contenedor principal del componente */}
            <p>For Better Experience Download <br /> Tomato App</p> {/* Texto informativo */}
            <div className='app-download-platforms'> {/* Contenedor de las plataformas de descarga */}
                <img src={assets.play_store} alt="" /> {/* Icono de Play Store */}
                <img src={assets.app_store} alt="" /> {/* Icono de App Store */}
            </div>
        </div>
    )
}

export default AppDownload
