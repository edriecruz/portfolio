import React from 'react'
import './index.scss'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { 
  faHome, 
  faUser, 
  faEnvelope, 
  faSuitcase 
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoE} alt="logo"/>
            <img className='sublogo' src={LogoSubtitle} alt="logo"/>
        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        
        <ul>
        <li>
          <a
            href="https://codepen.io/edriecruz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/edrie-cruz-675208246/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/edriecruz"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/edriecruz"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eeedscruz"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        </ul>

    </div>
  )
}

export default Sidebar