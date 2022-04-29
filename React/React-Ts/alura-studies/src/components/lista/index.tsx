import { Itarefa } from "../../types/Itarefa";
import Item from "./item";
import style from "./Lista.module.scss";

function Lista({ tarefas }: { tarefas: Itarefa[] }) {
  return (
    <aside className={style.ListaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
