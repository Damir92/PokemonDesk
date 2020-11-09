import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  wide?: boolean;
  yellow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, small = false, wide = false, yellow = false }) => {
  return (
    <button
      type="button"
      className={cn(s.root, { [s.yellow]: yellow }, { [s.wide]: wide }, { [s.small]: small })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
