import React, { useState } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onSubmit, cpfValido }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: { valido:true, texto: "" }});
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
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
        label="Sobrenome"
        required
      />
      <TextField
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = cpfValido(cpf);
         setErros({cpf: ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        fullWidth
        variant="outlined"
        id="cpf"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
