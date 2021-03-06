import React, { useState, useContext } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../Contexts/ValidacoesCadastro";
import useErrors from "../../Hooks/useErrors";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErrors(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        onChange={(event) => {
          setNome(event.target.value);
        }}
        margin="normal"
        fullWidth
        variant="outlined"
        id="nome"
        label="Nome"
        name="nome"
        required
      />
      <TextField
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        margin="normal"
        fullWidth
        variant="outlined"
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        required
      />
      <TextField
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        fullWidth
        variant="outlined"
        id="CPF"
        label="CPF"
        required
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
