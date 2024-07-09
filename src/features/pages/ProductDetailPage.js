import React from 'react'
import { ProductDetail } from '../product/components/ProductDetail'
import Navbar from '../navbar/Navbar'

function ProductDetailPage() {
  return (
    <div>
        <Navbar>

      <ProductDetail></ProductDetail>
        </Navbar>
    </div>
  )
}

export default ProductDetailPage
