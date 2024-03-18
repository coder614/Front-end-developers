import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <h1>Front-End</h1>
                    <p>Development</p>
                </div>
                <div className="nav-list">
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/">Home</NavLink>
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/Topics">Topics</NavLink>
                    {/* <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/Projacts">Projacts</NavLink> */}
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/About">About</NavLink>
                </div>
                <div className="nav-list2">
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/"><i class="ri-home-4-line"></i></NavLink>
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/Topics"><i class="ri-code-s-slash-line"></i></NavLink>
                    {/* <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/Projacts"><i class="ri-folder-open-line"></i></NavLink> */}
                    <NavLink className={(e) => { return e.isActive ? "style" : "" }} to="/About"><i class="ri-account-pin-box-line"></i></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar