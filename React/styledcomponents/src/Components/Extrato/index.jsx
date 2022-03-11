import React from "react";
import { Box } from "../../Components/UI";
import { extratoLista } from "../../info";
import { Botao } from "../../Components/UI";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
export default Extrato;
