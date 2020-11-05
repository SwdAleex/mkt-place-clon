import React from 'react'

import {useStateValue} from '../Container/StateProvider'

import { getBasketTotal } from '../Container/reducer'

import CurrencyFormat from 'react-currency-format'

import '../Style/subtotal.scss'

const Subtotal = () => {

  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Procced to checkout</button>
    </div>
  )
}

export default Subtotal
