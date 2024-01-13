import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// Import site: https://fontawesome.com/docs/apis/javascript/import-icons
import './Header.css'

// Nav Contact Section
function ContactInfo() {
    return (
        <div className='contact__info'>
            <div className='info__email'>
                <FontAwesomeIcon icon={faEnvelope} />
                vdqhuy99@gmail.com
            </div>
            <div className='info__phone'>
                <FontAwesomeIcon icon={faPhone} />
                0775922731
            </div>
        </div>
    )
}

function ContactSocial() {
    return (
        <div className='contact__social'>
            <div className='social__auth'>
                <a href='http://localhost:3000/'>Sign in</a>
                /
                <a href='http://localhost:3000/'>Sign up</a>
            </div>
            <div className='social__media'>
                <a href='https://www.facebook.com/huy.voquoc.507/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='https://www.instagram.com/_._._huy_._._/' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='http://localhost:3000/'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='http://localhost:3000/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    )
}

function NavContact() {
    return (
        <nav className='nav__contact'>
            <div className='grid'>
                <ContactInfo />
                <ContactSocial />
            </div>
        </nav>
    )
}
// Nav Contact Section

// Nav Navigation Section
function NavigationLogo() {
    return (
        <div className='navigation__logo'>
            <a href='http://localhost:3000/'>AISHOP</a>
        </div>
    )
}

function NavigationMainNav() {
    return (
        <div className='navigation__main-nav'>
            <ul className='main-nav__list'>
                <li className='main-nav__item'>
                    <a href='http://localhost:3000/client/home'>HOME</a>
                </li>
                <li className='main-nav__item'>
                    <a href='http://localhost:3000/client/about'>ABOUT</a>
                </li>
                <li className='main-nav__item'>
                    <a href='http://localhost:3000/'>SHOP</a>
                </li>
                <li className='main-nav__item'>
                    <a href='http://localhost:3000/'>CONTACT</a>
                </li>
            </ul>
        </div>
    )
}

function NavigationSubNav() {
    return (
        <div className='navigation__sub-nav'>
            <ul className='sub-nav__list'>
                <li className='sub-nav__item'>
                    <a href='http://localhost:3000/'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                </li>
                <li className='sub-nav__item'>
                    <a href='http://localhost:3000/'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                </li>
                <li className='sub-nav__item'>
                    <a href='http://localhost:3000/'>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

function NavNavigation() {
    return (
        <nav className='nav__navigation shadow'>
            <div className='grid'>
                <NavigationLogo />
                <NavigationMainNav />
                <NavigationSubNav />
            </div>
        </nav>
    )
}
// Nav Navigation Section

// Header Section
function Header() {
  return (
    <div className='Header'>
        <div className='header__nav'>
            <NavContact />
            <NavNavigation />
        </div>
    </div>
  )
}

export default Header;