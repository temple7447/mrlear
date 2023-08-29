import React from 'react'
import DashboardNav from './DashboardNav';
import { Outlet } from 'react-router-dom'
import Social from './Social';
import Footer from '../Component/Footer';

function DashBoardUnique({ Data }) {
  return (
    <div>
      <Social />
      <DashboardNav />
      <Outlet />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default DashBoardUnique