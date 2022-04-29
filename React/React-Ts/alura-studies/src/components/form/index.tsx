import React, { useState } from "react";
import { Itarefa } from "../../types/Itarefa";
import Botao from "../botao";
import style from "./form.module.scss";

 interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<{
    tarefa: string;
    tempo: string;
}[]>>
 }

function Formulario({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  const adicionarTarefa = () => {
    setTarefas(tarefasAntigas => [...tarefasAntigas, {
      tarefa, 
      tempo

    }]);
    setTarefa('')
    setTempo('00:00')
  };
  return (
    <form
      className={style.novaTarefa}
      onSubmit={(event) => {
        event.preventDefault();
        adicionarTarefa();
      }}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          value={tarefa}
          onChange={(event) => {
            setTarefa(event.target.value);
          }}
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          value={tempo}
          onChange={(event) => {
            setTempo(event.target.value);
          }}
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit"> Adicionar </Botao>
    </form>
  );
}

export default Formulario;
