import "../../assets/scss/components/UI/button.scss";
import { ButtonProps } from "../../types/ui.types.ts";

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
