import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../product/components/ProductList'
import Footer from '../../footer/Footer'

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
        <Footer></Footer>
      </Navbar>
    </div>
  )
}

export default Home
