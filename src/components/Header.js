import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <h1 className='header__title'>Expensify</h1>
    <div className='header__navigation'>
      <NavLink to='/' activeClassName='is-active' exact={true}>
        Dashboard
      </NavLink>
      <NavLink to='/create' activeClassName='is-active'>
        Create Expense
      </NavLink>
      <NavLink to='/help' activeClassName='is-active'>
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
