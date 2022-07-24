import React from 'react'

import {Link} from 'react-router-dom'

import {Navbar, Offcanvas, Nav, Container} from "react-bootstrap";

import '../Styles/global.css'

export default function Header(props) {
  const showNav = props.showNav ?? true;

  return (
    <>
    <Navbar key='md' expand='md'>
      <Container style={{background: "none", padding: "25px 0px"}}>
      <Navbar.Brand href="/"><img src="/images/logo.png" alt='' height={45} width={134} /></Navbar.Brand>
        
          {showNav ?
          <Offcanvas.Body>
            <Nav>
              <div className="contact-btn">
                <Link to={'/ContactUs'}><button type='submit'>Contact us <img src='/images/WhatsApp.png' alt=''/></button></Link>
              </div>
            </Nav>
          </Offcanvas.Body>
          : ""}
      </Container>
    </Navbar>
    </>
  )
}
