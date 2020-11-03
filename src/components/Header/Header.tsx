import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';

import { ReactComponent as Logo } from '../../img/logo.svg';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.container)}>
        <a className={cn(s.logoLink)} href="/">
          <Logo />
        </a>

        <ul className={cn(s.menu)}>
          <li className={cn(s.item)}>
            <a className={cn(s.menuLink, s.menuLinkActive)} href="/">
              Home
            </a>
          </li>
          <li className={cn(s.item)}>
            <a className={cn(s.menuLink)} href="/">
              Pokédex
            </a>
          </li>
          <li className={cn(s.item)}>
            <a className={cn(s.menuLink)} href="/">
              Legendaries
            </a>
          </li>
          <li className={cn(s.item)}>
            <a className={cn(s.menuLink)} href="/">
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
