import React from "react";
import "./style.scss";
function Lista() {
  const tarefas = [
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
    <aside className="ListaTarefas">
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className='item'>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
