import React from 'react'
import { Outlet } from 'react-router-dom'

const Deshboard = () => {
  return (
    <div>
      <h2> Deshboard </h2>
      <Outlet/>
    </div>
  )
}

export default Deshboard
