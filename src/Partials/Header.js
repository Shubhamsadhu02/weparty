import React from 'react'

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
                <a href='/ContactUs'><button type='submit'>Contact us <img src='/images/WhatsApp.png' alt=''/></button></a>
              </div>
            </Nav>
          </Offcanvas.Body>
          : ""}
      </Container>
    </Navbar>
    </>
  )
}
