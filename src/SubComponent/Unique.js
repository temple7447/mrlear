import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'
import Social from './Social';
import Footer from '../Component/Footer';

function Unique({ Data }) {
  return (
    <div>
      <Social />
      <NavigationBar Data={Data} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Unique