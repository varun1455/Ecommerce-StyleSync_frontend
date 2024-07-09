import React from 'react'
import { AdminProductDetail } from '../admin/components/AdminProductDetail'
import Navbar from '../navbar/Navbar'

function AdminProductDetailPage() {
  return (
    <div>
        <Navbar>

      <AdminProductDetail></AdminProductDetail>
        </Navbar>
    </div>
  )
}

export default AdminProductDetailPage
