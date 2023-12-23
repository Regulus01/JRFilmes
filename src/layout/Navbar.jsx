import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-list'>
            <div className='icon-div'>
                <NavLink to="/"> <img src="logo.png" width="70" alt="Logo" /></NavLink>
            </div>

            <div className='items-div'>
                <ul className='list'>
                    <li className='item'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='item'>
                        <NavLink to="/about">Sobre</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar