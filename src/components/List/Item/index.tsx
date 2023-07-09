import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

interface Props extends ITask {
  handleSelectTask: (selected: ITask) => void;
}

export default function Item({
  taskName,
  taskTime,
  selected,
  completed,
  id,
  handleSelectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        handleSelectTask({ taskName, taskTime, selected, completed, id })
      }
    >
      <h3>{taskName}</h3>
      <span>{taskTime}</span>
    </li>
  );
}
