import React from 'react';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className='nav'>
                <div className='navBrand'>
                    <a className='navLink' href='#'>Sucupots</a>
                </div>
                <ul className="navList">
                    <li >
                        <a className='navLink' href="#">Macetas</a>
                    </li>
                    <li >
                        <a className='navLink' href="#">Mayoristas</a>
                    </li>
                    <li >
                        <a className='navLink' href="#">Envios</a>
                    </li>
                    <li >
                        <a className='navLink' href="#">Nosotros</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;