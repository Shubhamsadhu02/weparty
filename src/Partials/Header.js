import React from 'react'

import {Link, NavLink, Route, useParams} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Button, Container, NavDropdown, Form, FormControl} from "react-bootstrap";

import '../Styles/global.css'

export default function Header(props) {
  const showNav = props.showNav ?? true;

  return (
    <>
    <Navbar key='md' expand='md'>
      <Container style={{background: "none", padding: "25px 0px"}}>
      <Navbar.Brand href="/"><img src="/images/logo.png" height={45} width={134} /></Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          {showNav ?
          <Offcanvas.Body className='justify-content-end'>
            <Nav>
              <div className="contact-btn">
                <a href='/ContactUs'><button type='submit'>Contact us <img src='/images/WhatsApp.png'/></button></a>
              </div>
            </Nav>
          </Offcanvas.Body>
          : ""}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  )
}
