import { memo } from "react";
import { ITask } from "../../types/ITask";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  handleSelectTask: (selected: ITask) => void;
}

function List({ tasks, handleSelectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item) => (
          <Item handleSelectTask={handleSelectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default memo(List);
