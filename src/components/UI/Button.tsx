import "../../assets/scss/components/UI/button.scss";
import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  submit = false,
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  submit?: boolean;
  disabled?: boolean;
}) => {
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
