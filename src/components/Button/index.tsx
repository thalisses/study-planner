import style from "./Button.module.scss";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type || "button"} className={style.button}>
      {children}
    </button>
  );
}
