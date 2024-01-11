import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Header.css'

// Nav Contact Section
function ContactInfo() {
    return (
        <div className='contact--info'>
            <div className='info--email'>
                <FontAwesomeIcon icon={faEnvelope} />
                vdqhuy99@gmail.com
            </div>
            <div className='info--phone'>
                <FontAwesomeIcon icon={faPhone} />
                0775922731
                </div>
        </div>
    )
}

function ContactSocial() {
    return (
        <div className='contact--social'>
            <div className='social--auth'>
                <a href='http://localhost:3000/'>Sign in</a>
                /
                <a href='http://localhost:3000/'>Sign up</a>
            </div>
            <div className='social--media'>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
    )
}

function NavContact() {
    return (
        <nav className='nav--contact'>
            <ContactInfo />
            <ContactSocial />
        </nav>
    )
}
// Nav Contact Section

// Nav Navigation Section
function NavNavigation() {
    return (
        <nav className='nav--navigation'>

        </nav>
    )
}
// Nav Navigation Section


function Header() {
  return (
    <div className='header'>
        <div className='header--nav'>
            <NavContact />
            <NavNavigation />
        </div>
    </div>
  )
}

export default Header;