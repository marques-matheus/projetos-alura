import React, { useState } from "react";

function useErrors(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoestado = { ...erros };
    novoestado[name] = validacoes[name](value);
    setErros(novoestado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}
function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }
  return estadoInicial;
}

export default useErrors;
