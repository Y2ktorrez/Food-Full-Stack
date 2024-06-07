import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  // Acceso al contexto del almacenamiento para obtener información sobre los elementos del carrito
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        {/* Título de los elementos del carrito */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Mapeo de los elementos del carrito */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) { // Si el elemento está en el carrito
            return (
              <div>
                {/* Detalles del elemento del carrito */}
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" /> {/* Imagen del elemento */}
                  <p>{item.name}</p> {/* Nombre del elemento */}
                  <p>${item.price}</p> {/* Precio del elemento */}
                  <p>{cartItems[item._id]}</p> {/* Cantidad del elemento en el carrito */}
                  <p>${item.price * cartItems[item._id]}</p> {/* Total del elemento en el carrito */}
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p> {/* Botón para eliminar el elemento del carrito */}
                </div>
                <hr/> {/* Línea divisoria */}
              </div>
            )
          }
        })}
        {/* Sección adicional para más elementos del carrito */}
      </div>
      {/* Sección inferior del carrito */}
      <div className='cart-bottom'>
        {/* Sección de totales del carrito */}
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            {/* Detalles del total del carrito */}
            <div className="cart-total-details">
              <p>Subtotal</p> {/* Subtotal del carrito */}
              <p>${getTotalCartAmount()}</p> {/* Total del carrito */}
            </div>
            <hr/> {/* Línea divisoria */}
            <div className="cart-total-details">
              <p>Delivery</p> {/* Costo de envío */}
              <p>${getTotalCartAmount()===0?0:2}</p> {/* Precio fijo del envío, debería ser dinámico */}
            </div>
            <hr/> {/* Línea divisoria */}
            <div className="cart-total-details">
              <b>Total</b> {/* Total final del carrito */}
              {/* Suma del subtotal y el costo de envío */}
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b> {/* Se suma el subtotal con el precio fijo del envío */}
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button> {/* Botón para proceder al pago */}
        </div>
        {/* Sección para ingresar un código promocional */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p> {/* Instrucciones para ingresar un código promocional */}
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo-code' /> {/* Campo para ingresar el código promocional */}
              <button>Submit</button> {/* Botón para enviar el código promocional */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
