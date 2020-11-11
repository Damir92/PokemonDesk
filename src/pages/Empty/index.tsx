import React from 'react';

import Header from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

const Empty: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <Header />
      <div>This is Empty Page for {title}!</div>
    </>
  );
};

export default Empty;
