import React from 'react';
import '../../styles/components/_button.scss';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
