import React from 'react';
import cn from 'classnames';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(s.footer)}>
      <div className={cn(s.container)}>
        <a href="/" className={cn(s.link)}>
          Make with
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </a>
        <a href="/" className={cn(s.link)}>
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
