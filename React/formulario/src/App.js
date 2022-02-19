import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./App.css";
import "@fontsource/roboto";

import FormularioCadastro from "./components/Formulario/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={onSubmit} cpfValido={cpfValido} />
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

function cpfValido(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF dete ter 11 digitos" };
  } else{
    return {valido: true, texto: ''}
  }
}

export default App;
