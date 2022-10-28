import logo from '../img/sucupots.svg';
import CartWidget from './CartWidget.js';
import { FaShoppingCart } from "react-icons/fa";


function NavBar() {
    return (
        <header className="App-header">
            <div className='Logo'>
                <img src={logo} className='Logo-img' alt=""></img>
            </div>
            <div className='Botonera'>
                <ul className="Secciones">
                    <li className="nav-item">
                        <a aria-current="page" href="./catalogo.html">Macetas</a>
                    </li>
                    <li className="nav-item">
                        <a aria-current="page" href="./pages/mayoristas.html">Mayoristas</a>
                    </li>
                    <li className="nav-item">
                        <a aria-current="page" href="./pages/envios.html">Envios</a>
                    </li>
                    <li className="nav-item">
                        <a aria-current="page" href="./pages/nosotros.html">Nosotros</a>
                    </li>
                </ul>
            </div>
            <div className='carrodeCompras'>
                <CartWidget />
                <FaShoppingCart />
            </div>
        </header>
    )
}

export default NavBar;