import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntregas({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        variant="outlined"
        id="cep"
        margin="normal"
        label="CEP"
        type="number"
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        variant="outlined"
        id="endereco"
        margin="normal"
        fullWidth
        label="Endereço"
        type="text"
        required
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        variant="outlined"
        id="numero"
        margin="normal"
        label="Numero"
        type="number"
        required
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        variant="outlined"
        id="estado"
        margin="normal"
        label="Estado"
        type="text"
        required
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        variant="outlined"
        id="cidade"
        margin="normal"
        label="Cidade"
        type="text"
        required
      />

      <Button
        type="submit"
        fullWidth
        margin="normal"
        variant="contained"
        color="primary"
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntregas;
