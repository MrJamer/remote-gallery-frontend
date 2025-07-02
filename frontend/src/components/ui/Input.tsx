import React from 'react';

type Props = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({ type, onChange }) => (
  <input type={type} onChange={onChange} style={{ margin: '10px' }} />
);

export default Input;
