import PropTypes from "prop-types"
import React from "react"

import Home from '../icons/home-1.svg';
import About from '../icons/user.svg';
import Skills from '../icons/controls-6.svg';
import Work from '../icons/settings-5.svg';
import Mail from '../icons/paper-plane-1.svg';

import Linkedin from '../icons/linkedin.svg';
import Github from '../icons/github.svg';

import Logo from '../icons/cloud.svg';


import { Link } from "gatsby";


const Sidebar = ({ siteTitle, location, toggleTerminal, terminalActive }) => {
  const active = location.pathname.split('/')[1];

  return (
    <div id='sidebar' >
      <div className='top'>
        <Link id='logo' className='icon-container' to="/">
          <Logo className='icon'/>
        </Link>
        <div 
          id='terminal-icon' 
          className='icon-container'
          onClick={toggleTerminal}
        >
          <span 
            style={{ fontSize:'25px' }} 
            className={`icon noselect ${terminalActive && 'active'}`}
          >
            >_
          </span>
        </div>
      </div>

      <div className='nav'>
        <Link className='icon-container' to="/">
          <Home className={`icon ${active === ('') && 'active'}`}/>
        </Link>

        <Link className='icon-container' to="/about/">
          <About className={`icon ${active === 'about' && 'active'}`}/>
        </Link>
        
        <Link className='icon-container' to="/projects/">
          <Work className={`icon ${active === 'projects' && 'active'}`}/>
        </Link>
        
        {/* <Link className='icon-container' to="/contact/">
          <Mail className={`icon ${active === 'contact' && 'active'}`}/>
        </Link> */}
      </div>

      <div className='social'>
        <a className='icon-container' href="https://github.com/lucaswatts">
          <Github id="github" className='icon' />
        </a>
        <a className='icon-container' href="https://www.linkedin.com/in/lucas-watts-739594140/">
          <Linkedin id="linkedin" className='icon' />
        </a>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
