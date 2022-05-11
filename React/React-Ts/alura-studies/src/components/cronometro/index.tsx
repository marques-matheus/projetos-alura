import Botao from "../botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";
import { useState, useEffect } from "react";

interface props {
  selecionado: Itarefa | undefined;
}

export default function Cronometro({ selecionado }: props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao type="button"> Começar </Botao>
    </div>
  );
}
