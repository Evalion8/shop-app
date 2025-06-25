import type { ButtonProps } from '../../types/ButtonTypes';
import './Button.module.css';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button accent" {...props}>
      {children}
    </button>
  );
};
