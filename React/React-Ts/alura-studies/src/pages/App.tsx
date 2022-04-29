import React, { useState } from "react";
import Cronometro from "../components/cronometro";

import Formulario from "../components/form";
import Lista from "../components/lista";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "React TS",
      tempo: "02:00:00",
    },
  ]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista tarefas={tarefas} />
    </div>
  );
}

export default App;
