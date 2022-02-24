import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import validacoesCadastro from "../../Contexts/ValidacoesCadastro";
function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(validacoesCadastro);
  function validarCampos(event) {
    const { name, value } = event.target;
    const novoestado = { ...erros };
    novoestado[name] = validacoes[name](value);
    setErros(novoestado);
    console.log(novoestado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        variant="outlined"
        id="email"
        name="email"
        margin="normal"
        fullWidth
        label="Email"
        type="email"
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        variant="outlined"
        id="Senha"
        margin="normal"
        fullWidth
        label="Senha"
        type="password"
        required
      />
      <Button type="submit" margin="normal" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
