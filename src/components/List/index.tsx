import { memo } from "react";
import { ITasks } from "../../types/tasks";
import Item from "./Item";
import style from "./List.module.scss";

function List({ tasks }: { tasks: ITasks[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default memo(List);
