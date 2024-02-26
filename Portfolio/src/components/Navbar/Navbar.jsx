import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src='./assets/images/icons8-code-96.png' width={40} alt='' />
          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>Skills</a>
            </li>
            <li>
              <a className='menu-item'>Work Experience</a>
            </li>
            <li>
              <a className='menu-item'>Contact Me</a>
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? (
              <CloseIcon style={{ fontSize: '1.8rem' }} />
            ) : (
              <MenuOutlinedIcon style={{ fontSize: '1.8rem' }} />
            )}
            <span style={{ fontSize: '1.8rem' }}>{/* menu */}</span>
            {/* {openMenu ? "close" : "menu"} */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
