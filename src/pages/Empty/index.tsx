import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const Empty: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <>
      <div>This is Empty Page for {title}!</div>
    </>
  );
};

export default Empty;
