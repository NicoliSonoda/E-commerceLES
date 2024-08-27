import React from 'react';
import '../Components/Header.css'; 
import logo from '../assets/Images/mago.png'; 
import carrinho from '../assets/Images/carrinhoCompras.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <h1 className='h1-custom'> <Link to = '/' className='link-custom'>Sebo nas Canelas</Link></h1>
        
        <nav className="nav">
          <ul>
            <li>
              <Link>Aventuras</Link>  
            </li>
            <li>
              <Link>Científicos</Link>  
            </li>
            <li>
              <Link>Mistério</Link>
            </li>
            <li></li>
            <li></li>
            <li>
              <Link to ='/admin'>Admin</Link>
            </li> 
            <li>
              <Link to = '/cadastro'>Cadastre-se</Link>
            </li>
            <li>
              <Link to ='/conta'>Minha conta</Link>
            </li>
            <li>
              <Link to = '/pedidos'>Meus pedidos</Link>
            </li>

            <div className="carrinho">
              <img src={carrinho} alt="Carrinho" />
            </div>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
