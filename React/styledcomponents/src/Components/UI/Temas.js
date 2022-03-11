import {
  fundoClaro,
  conteudoClaro,
  textoFundoClado,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
} from "./Variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClado,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100)",
};
