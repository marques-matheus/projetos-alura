import React from "react";
import { TextField, Button } from "@material-ui/core";
function DadosUsuario() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="email"
        margin="normal"
        fullWidth
        label="Email"
        type="email"
        required
      />
      <TextField
        variant="outlined"
        id="Senha"
        margin="normal"
        fullWidth
        label="Senha"
        type="password"
        required
      />
      <Button type="submit" margin="normal" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
