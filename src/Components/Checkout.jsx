import React from 'react'
import { useStateValue } from '../Container/StateProvider'

import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

import '../Style//checkout.scss'

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__banner"
        />
        <div className="checkout__title">
          <h2>Shopping basket</h2>

{/*           <CheckoutProduct
            key="4"
            id="4"
            title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti officia tenetur illo beatae, ad culpa!"
            price={2999.0}
            rating={5}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/f5f35914-83bc-40a5-a9c1-8241e69c0eba.9b021977fe429a9d64bf44648d8dff7e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
          />
          <CheckoutProduct
            key="4"
            id="4"
            title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti officia tenetur illo beatae, ad culpa!"
            price={2999.0}
            rating={5}
            image="https://res.cloudinary.com/walmart-labs/image/upload/w_225,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/f5f35914-83bc-40a5-a9c1-8241e69c0eba.9b021977fe429a9d64bf44648d8dff7e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
          /> */}

          {basket.map((item) => {
            const { id, title, image, price, rating } = item
            return (
              <CheckoutProduct
                // key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            )
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
        <h2>The subtotal will be here</h2>
      </div>
    </div>
  )
}

export default Checkout
