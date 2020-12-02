import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface LayoutProps {
  className?: string;
  capitalize?: boolean;
  level: number;
}

const Heading: React.FC<LayoutProps> = ({ children, level = 1, capitalize }) => {
  const Tag: any = `h${level}`;

  return <Tag className={cn(s[Tag as keyof typeof s], s.title, { [s.capitalize]: capitalize })}>{children}</Tag>;
};

export default Heading;
