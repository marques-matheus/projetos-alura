import { Itarefa } from "../../types/Itarefa";
import Item from "./item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.ListaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item selecionaTarefa={selecionaTarefa} key={tarefa.id} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
