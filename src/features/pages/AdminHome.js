import React from 'react'
import Navbar from '../navbar/Navbar'

import AdminProductList from '../admin/components/AdminProductList'

function AdminHome() {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </div>
  )
}

export default AdminHome
