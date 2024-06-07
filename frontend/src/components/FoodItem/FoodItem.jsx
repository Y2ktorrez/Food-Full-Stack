import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => { // Componente FoodItem que recibe las propiedades del elemento de comida.
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Usa el hook useContext para acceder al contexto de la tienda.

    return (
        <div className='food-item'> {/* Contenedor principal del componente FoodItem */}
            <div className="food-item-img-container"> {/* Contenedor para la imagen del elemento de comida */}
                <img className="food-item-image" src={image} alt="" /> {/* Imagen del elemento de comida */}
                {
                    !cartItems[id] // Verifica si el elemento no está en el carrito.
                        ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> // Si el elemento no está en el carrito, muestra el ícono de añadir.
                        : <div className='food-item-counter'> {/* Si el elemento ya está en el carrito, muestra el contador y los botones de añadir y quitar */}
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" /> {/* Botón para quitar el elemento del carrito */}
                            <p>{cartItems[id]}</p> {/* Muestra la cantidad del elemento en el carrito */}
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" /> {/* Botón para añadir más cantidad del elemento al carrito */}
                        </div>
                }
            </div>
            <div className="food-item-info"> {/* Contenedor para la información del elemento de comida */}
                <div className="food-item-name-rating"> {/* Contenedor para el nombre y la calificación del elemento */}
                    <p>{name}</p> {/* Nombre del elemento de comida */}
                    <img src={assets.rating_starts} alt="" /> {/* Imagen de la calificación */}
                </div>
                <p className="food-item-desc">{description}</p> {/* Descripción del elemento de comida */}
                <p className="food-item-price">${price}</p> {/* Precio del elemento de comida */}
            </div>
        </div>
    );
}

export default FoodItem


