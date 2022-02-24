import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { validarCpf, validarSenha } from "./Models/cadastro";

import FormularioCadastro from "./components/Formulario/FormularioCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={onSubmit}
        validacoes={{ cpf:validarCpf, senha:validarSenha }}
      />
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
