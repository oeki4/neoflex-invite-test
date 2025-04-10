import "./button.scss";
import {ReactNode} from "react";

export interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	submit?: boolean;
	disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  submit = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick && (() => onClick())}
      className="btn"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
