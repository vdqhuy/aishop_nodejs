import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
// Import site: https://fontawesome.com/docs/apis/javascript/import-icons
import './Footer.css';

//Main Footer Section
function MainFooterContact() {
    return (
        <div className='main-footer__contact'>
            <h1 className='border-bottom'>AISHOP</h1>
            <ul className='contact__detail-info'>
                <li className='detail-info__address'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    97 D. Man Thien, Hiep Phu, District 9, Ho Chi Minh City 70000, Vietnam
                </li>
                <li className='detail-info__phone'>
                    <FontAwesomeIcon icon={faPhone} />
                    0775922731
                </li>
                <li className='detail-info__email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    vdqhuy99@gmail.com
                </li>
            </ul>
        </div>
    )
}

function MainFooterCategory() {
    return (
        <div className='main-footer__category'>
            <h1>PRODUCT</h1>
            <ul className='category__cate-name'>
                <li className='cate-name__link'>
                    <a href='http://localhost:3000/'>Cleanser</a>
                </li>
                <li className='cate-name__link'>
                    <a href='http://localhost:3000/'>Lipstick</a>
                </li>
                <li className='cate-name__link'>
                    <a href='http://localhost:3000/'>Sunscreen</a>
                </li>
                <li className='cate-name__link'>
                    <a href='http://localhost:3000/'>Other</a>
                </li>
            </ul>
        </div>
    )
}

function MainFooterNavigation() {
    return (
        <div className='main-footer__navigation'>
            <h1>INFOMATIONS</h1>
            <ul className='navigation__list-nav'>
                <li className='list-nav__home'>
                    <a href='http://localhost:3000/'>
                        Home
                    </a>
                </li>
                <li className='list-nav__about'>
                    <a href='http://localhost:3000/'>
                        About
                    </a>
                </li>
                <li className='list-nav__location'>
                    <a href='http://localhost:3000/'>
                        Location
                    </a>
                </li>
                <li className='list-nav__contact'>
                    <a href='http://localhost:3000/'>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

function MainFooter() {
    return (
        <div className='footer__main-footer'>
            <div className='grid'>
                <MainFooterContact />
                <MainFooterCategory />
                <MainFooterNavigation />
            </div>
        </div>
    )
}
//Main Footer Section

//Footer Copyright Section
function CopyrightYear() {
    return (
        <div className='copyright__web-info'>
            Demo © 2024 AIShop Web
        </div>
    )
}

function CopyrightAuthor() {
    return (
        <div className='copyright__author'>
            <a href='https://www.facebook.com/huy.voquoc.507/' target="_blank" rel="noopener noreferrer">
                 Võ Đặng Quốc Huy
            </a>
        </div>
    )
}

function FooterCopyright() {
    return (
        <div className='footer__copyright'>
            <div className='grid'>
                <CopyrightYear />
                | Designed by
                <CopyrightAuthor />
            </div>
        </div>
    )
}
//Footer Copyright Section

//Footer Section
function Footer() {
    return (
        <div className='Footer'>
            <MainFooter />
            <FooterCopyright />
        </div>
    )
}

export default Footer;