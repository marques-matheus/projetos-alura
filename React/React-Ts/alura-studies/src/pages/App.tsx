import React, { useState } from "react";
import Cronometro from "../components/cronometro";

import Formulario from "../components/form";
import Lista from "../components/lista";
import style from "./App.module.scss";
import { Itarefa } from "../types/Itarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  const selecionaTarefa = (tarefaSelecionada: Itarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro selecionado={selecionado} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </div>
  );
}

export default App;
