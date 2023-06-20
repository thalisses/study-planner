import { memo } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const tarefas = [
    {
      taskName: "React",
      taskTime: "02:00:00",
    },
    {
      taskName: "Javascript",
      taskTime: "01:00:00",
    },
    {
      taskName: "Typescript",
      taskTime: "03:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default memo(List);
