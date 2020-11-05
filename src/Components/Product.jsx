import React from 'react'
import { useStateValue } from '../Container/StateProvider';

import '../Style/product.scss'

const Product = ({ id, title, price, rating, image }) => {

  const [{ basket }, dispatch] = useStateValue();  // [state] REFERS TO THE STATE OF GLOBAL STORE

  const addToBasket = () => {

    // DISPATCH THE ITEM INTO THE DATA LAYER
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating,
      },
    })

  }




  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, rate) => (
                <span key={rate} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
          </p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
