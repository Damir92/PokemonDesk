import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface LayoutProps {
  level: number;
}

const Heading: React.FC<LayoutProps> = ({ children, level = 1 }) => {
  const Tag: any = `h${level}`;

  return <Tag className={cn(s[Tag], s.title)}>{children}</Tag>;
};

export default Heading;
