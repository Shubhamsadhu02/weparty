import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(props) {
  const showNav = props.showNav ?? true;

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand"><img src="/images/logo.svg" alt='' height="45" width="134}" /></a>
          {showNav ?
          <div className="contact-btn">
            <Link to={'/contact-us'}>Contact us <img src='/images/WhatsApp.png' alt='' /></Link>
          </div>
          :""}
        </div>
      </nav>
    </>
  )
}
