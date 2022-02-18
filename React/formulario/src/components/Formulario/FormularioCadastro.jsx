import React, { useState } from "react";
import DadosEntregas from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit, cpfValido }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} cpfValido={cpfValido} />
      <DadosUsuario />
      <DadosEntregas />
    </>
  );
}

export default FormularioCadastro;
