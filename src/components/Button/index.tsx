import style from "./Button.module.scss";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function Button({ children, type }: Props) {
  return (
    <button type={type || "button"} className={style.button}>
      {children}
    </button>
  );
}
