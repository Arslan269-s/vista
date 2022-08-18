import React,{useEffect, useState} from 'react';
import "../Header/Header.css";
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Header = () => {
  // const [changeColor, setChangeColor] = useState(false);
  // const [changRoute,setChangeRoute]=useState()

  // let currentPath = window.location.pathname;
  const location = useLocation();
  var  change = location.pathname === '/marketplace'  ?'nav-navbar-color1': 'nav-navbar-color';
  // var  change = location.pathname === '/marketplace'  ?'nav-navbar-color1': 'marketplaces';  
  
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" className='py-3'>
         <div className='container'>
  
      <Navbar.Brand href="/">
        <img src="assets/image/market-place-logo.svg" className='img-fluid d-block m-auto market-place-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link className='nav-link' id={change}><Link to='/marketplace'>MarketPlace</Link></Nav.Link>
          <Nav.Link className='nav-link' id={change}><Link to='/introduction'>Introduction</Link></Nav.Link>
          <Nav.Link className='nav-link' id={change}><Link to='/auction'>Auction</Link></Nav.Link>
          <Nav.Link className='nav-link' id={change}><Link to=''>Wallet</Link></Nav.Link>
          <Nav.Link className='nav-link' id={change}><Link to=''>Contact</Link></Nav.Link>
        </Nav>
        <Nav>
          
          <Link to="/cart" className='header-button'> <button className='button-cart learn-more on-hover-effect top-to-bottom-effect' id={change}>Cart</button></Link>
          
          
          <Link to="/login"  className='header-button'><button className='button-account header-button get-started get-hover-effect get-bottom-to-top'>My account</button></Link>
          
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar> 

    </div>
  )
}
