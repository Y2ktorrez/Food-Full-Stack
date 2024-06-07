import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

/* Define el componente funcional ExploreMenu con las props 'category' y 'setCategory' */
const ExploreMenu = ({ category, setCategory }) => {
	return (
		<div className='explore-menu' id='explore-menu'> {/* Contenedor principal para el componente ExploreMenu */}
			<h1>Explore our menu</h1> {/* Título de la sección */}
			<p className='explore-menu-text'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure animi soluta reiciendis. Distinctio assumenda culpa nemo corporis in cumque, nesciunt eum expedita deserunt? Rem ipsam dolores laboriosam tempora in. Suscipit?
			</p>
			<div className="explore-menu-list">
				{/* Mapea cada elemento en la lista de menús y devuelve un div para cada uno */}
				{menu_list.map((item, index) => {
					return (
						<div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item"> {/* Contenedor para cada elemento del menú */}
							<img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" /> {/* Imagen del elemento del menú */}
							<p>{item.menu_name}</p> {/* Nombre del elemento del menú */}
						</div>
					)
				})}
			</div>
			<hr /> {/* Inserta una línea horizontal para separar secciones */}
		</div>
	)
}

export default ExploreMenu
