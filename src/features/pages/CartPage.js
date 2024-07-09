import React from 'react'
import { Cart } from '../cart/Cart'
import Navbar from '../navbar/Navbar'
import Footer from '../../footer/Footer'

function CartPage() {
  return (
    <div>
      <Navbar>

      <Cart></Cart>
     <Footer></Footer>

      </Navbar>
    </div>
  )
}

export default CartPage
