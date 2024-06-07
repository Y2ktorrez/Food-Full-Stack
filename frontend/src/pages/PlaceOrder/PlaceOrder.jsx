import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            {/* Detalles del total del carrito */}
            <div className="cart-total-details">
              <p>Subtotal</p> {/* Subtotal del carrito */}
              <p>${getTotalCartAmount()}</p> {/* Total del carrito */}
            </div>
            <hr /> {/* Línea divisoria */}
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
          <button>PROCEED TO  PAYMENT</button> {/* Botón para proceder al pago */}
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
