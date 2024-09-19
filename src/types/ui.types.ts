import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  submit?: boolean;
  disabled?: boolean;
}
