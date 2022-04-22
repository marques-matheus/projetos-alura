import React from "react";
import Item from "./item";
import style from "./Lista.module.scss";
function Lista() {
  let tarefas = [
    {
      tarefa: "Estudar React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Estudar TypeScript",
      tempo: "02:00:00",
    },
  ];
  return (
    <aside className={style.ListaTarefas}>
      <h2 onClick={() => {
        tarefas = [...tarefas, {tarefa: "Estudar", tempo: '05:00:00'}]
      }}>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
