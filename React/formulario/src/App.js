import { Container, Typography } from "@material-ui/core";
import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { validarCpf, validarSenha } from "./Models/cadastro";

import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import validacoesCadastro from "./Contexts/ValidacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de Cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha }}
      >
        <FormularioCadastro aoEnviar={onSubmit} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
