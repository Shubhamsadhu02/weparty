import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarText, Container, Row, Col } from 'reactstrap';


export default function Header(props) {
  const showNav = props.showNav ?? true;

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand"><img src="/images/logo.svg" alt height="45" width="134" /></a>
          <div className="contact-btn">
          <Link to={'/ContactUs'}><button type='submit'>Contact us <img src='/images/WhatsApp.png' alt='' /></button></Link>
        </div>
        </div>
      </nav>
    </>
  )
}
