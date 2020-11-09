import React from 'react';

import s from './Heading.module.scss';

interface LayoutProps {
  level: number;
}

const Heading: React.FC<LayoutProps> = ({ children, level = 1 }) => {
  const Tag: string = `h${level}`;

  return <Tag className={s[Tag]}>{children}</Tag>;
};

export default Heading;
