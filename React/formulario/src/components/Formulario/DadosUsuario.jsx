import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        variant="outlined"
        id="email"
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
