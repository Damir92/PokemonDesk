import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './Header.module.scss';

import { ReactComponent as Logo } from './assets/logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

const Header = () => {
  return (
    <header className={cn(s.root)}>
      <div className={cn(s.container)}>
        <a className={cn(s.logoLink)} href="/">
          <Logo />
        </a>

        <ul className={cn(s.menu)}>
          {MENU.map(({ id, value, link }) => (
            <li key={id} className={cn(s.item)}>
              <Link className={cn(s.menuLink)} to={link}>
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
