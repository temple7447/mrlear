import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Nav from './Nav'
import './style.css'
function UniqueDashboard({ children }) {
    return (
        <div>
            <SideBar />
            <section className="content">
                <Nav />
                <Outlet />
            </section>

        </div>
    )
}

export default UniqueDashboard