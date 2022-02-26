import React from "react";
import img from "../assets/img/doguito404.svg";
import "../assets/css/404.css";
const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={img} alt="" />
      <p className="naoencontrado-texto">Ops, Essa Página não existe</p>
    </main>
  );
};
export default Pagina404;
