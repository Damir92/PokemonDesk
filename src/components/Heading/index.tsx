import React from 'react';

import s from './Heading.module.scss';

interface LayoutProps {
  level: number;
}

const Heading: React.FC<LayoutProps> = ({ children, level = 1 }) => {
  switch (level) {
    case 1:
      return <h1 className={s.h1}>{children}</h1>;

    case 2:
      return <h2 className={s.h2}>{children}</h2>;

    case 3:
      return <h3>{children}</h3>;

    case 4:
      return <h4>{children}</h4>;

    case 5:
      return <h5>{children}</h5>;

    case 6:
      return <h6>{children}</h6>;

    default:
      return <p>{children}</p>;
  }
};

export default Heading;
