import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => { // Componente FoodDisplay que acepta la categoría como una prop.
    const { food_list } = useContext(StoreContext); // Usa el hook useContext para obtener food_list del contexto global.

    return (
        <div className='food-display' id='food-display'> {/* Contenedor principal del componente FoodDisplay */}
            <h2>Top dishes near you</h2> {/* Título de la sección */}
            <div className="food-display-list"> {/* Contenedor para la lista de elementos de comida */}
                {food_list.map((item, index) => { // Mapea cada elemento en food_list para renderizar los elementos de comida.
                    // Filtra los elementos basados en la categoría seleccionada.
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem // Renderiza el componente FoodItem para cada elemento de comida.
                                key={index} // Clave única para cada elemento de la lista.
                                id={item._id} // ID del elemento de comida.
                                name={item.name} // Nombre del elemento de comida.
                                description={item.description} // Descripción del elemento de comida.
                                price={item.price} // Precio del elemento de comida.
                                image={item.image} // Imagen del elemento de comida.
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay