import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntregas() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="cep"
        margin="normal"
        label="CEP"
        type="number"
        required
      />
      <TextField
        variant="outlined"
        id="endereco"
        margin="normal"
        fullWidth
        label="Endereço"
        type="text"
        required
      />
      <TextField
        variant="outlined"
        id="numero"
        margin="normal"
        label="Numero"
        type="number"
        required
      />
      <TextField
        variant="outlined"
        id="estado"
        margin="normal"
        label="Estado"
        type="text"
        required
      />
      <TextField
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
