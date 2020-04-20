import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className='nav-wrapper cyan px-1'>
        <a href='/' className='brand-logo'>
          React + Typescript
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <NavLink to='/'>Список дел</NavLink>
          </li>
          <li>
            <NavLink to='/about'>Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
