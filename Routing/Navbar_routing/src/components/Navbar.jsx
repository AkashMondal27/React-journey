import React from 'react'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Deshboard from './Deshboard'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            {/* <Link to ="/">Home </Link> */}
            <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : " ")}>
             Home
            </NavLink>
        </li>
        <li>
            {/* <Link to="/about">About </Link> */}
            <NavLink to="/about"  className={({ isActive }) => (isActive ? "active" : "")}>
             About
            </NavLink>
        </li>
        <li>
            {/* <Link to ="/deshboard">Deshboard</Link> */}
            <NavLink to="/deshboard"  className={({ isActive }) => (isActive ? "active" : "")}>
             Deshboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
