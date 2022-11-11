import CartWidget from '../CartWidget'
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className='nav'>
                <div className='navBrand'>
                    <NavLink className='navLink' to='/'>Sucupots</NavLink>
                </div>
                <ul className="navList">
                    <li >
                        <NavLink className='navLink' to='/macetas/cemento'>Macetas de Cemento</NavLink>
                    </li>
                    <li >
                        <NavLink className='navLink' to='/macetas/yeso'>Macetas de Yeso</NavLink>
                    </li>
                    <li >
                        <NavLink className='navLink' to='/cart'>Carrito</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;