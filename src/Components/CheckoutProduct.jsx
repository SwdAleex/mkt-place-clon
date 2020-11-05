import React from 'react'

import { useStateValue } from '../Container/StateProvider'

import '../Style/checkoutProduct.scss'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue()

  // REMOVE THE ITEM FROM THE BASKET
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="rate">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
