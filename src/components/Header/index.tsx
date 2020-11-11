import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';

import s from './Header.module.scss';

import { ReactComponent as Logo } from './assets/logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();

  return (
    <header className={cn(s.root)}>
      <div className={cn(s.container)}>
        <A className={cn(s.logoLink)} href="/">
          <Logo />
        </A>

        <ul className={cn(s.menu)}>
          {GENERAL_MENU.map(({ title, link }) => (
            <li key={title} className={cn(s.item)}>
              <A
                className={cn(s.menuLink, {
                  [s.activeLink]: link === path,
                })}
                href={link}>
                {title}
              </A>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
