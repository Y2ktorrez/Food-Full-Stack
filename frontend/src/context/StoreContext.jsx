import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Crea un contexto de React para compartir datos entre componentes
export const StoreContext = createContext()

// Define un componente funcional que actúa como proveedor de contexto
const StoreContextProvider = (props) =>{

    // Define el estado local para los elementos del carrito
    const [cartItems, setCartItems] = useState({});

    // Función para agregar un elemento al carrito
    const addToCart = (itemId) =>{
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    // Función para eliminar un elemento del carrito
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    
/*  useEffect(()=>{
        console.log(cartItems);
    },[cartItems]) */

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=> product._id===item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Define el objeto de contexto que contiene los datos y funciones necesarios para la tienda
    const contextValue = {
        food_list, // Lista de alimentos
        cartItems, // Elementos del carrito
        setCartItems, // Función para establecer los elementos del carrito
        addToCart, // Función para agregar elementos al carrito
        removeFromCart, // Función para eliminar elementos del carrito
        getTotalCartAmount
    }

    // Devuelve el proveedor de contexto con el valor del contexto establecido y los componentes secundarios como hijos
    return (
        <StoreContext.Provider value={contextValue}> 
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;