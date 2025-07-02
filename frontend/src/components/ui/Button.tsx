import React from 'react';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick} style={{ padding: '8px 16px' }}>
    {children}
  </button>
);

export default Button;
