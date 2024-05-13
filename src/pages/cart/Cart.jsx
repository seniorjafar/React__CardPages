import React from 'react'
import Empty from '../../components/empty/Empty'
import {useSelector} from "react-redux"

const Cart = () => {
  let carts = useSelector(s => s.cart.value)
  console.log(carts);
  return (
    <div>
      
      <Empty text="Cart"/>
    </div>
  )
}

export default Cart