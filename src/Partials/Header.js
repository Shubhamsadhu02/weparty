import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Header(props) {
  const showNav = props.showNav ?? true;
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand"><img src="/images/logo.svg" alt='' height="45" width="134}" /></Link>
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
