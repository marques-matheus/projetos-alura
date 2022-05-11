import React from "react";
import style from "./botao.module.scss";


interface Props{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: ()=> void,
  children: React.ReactNode
}

function Botao({onClick, type, children}: Props) {
  return (
    <>
      <button onClick={onClick} className={style.botao}>{children}</button>
    </>
  );
}

export default Botao;
