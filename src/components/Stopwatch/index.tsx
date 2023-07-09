import Button from "../Button";
import style from "./Stopwatch.module.scss";
import Clock from "./Clock";
import { ITask } from "../../types/ITask";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selectedTask: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selectedTask, finishTask }: Props) {
  const [time, setTime] = useState(0);

  const decrementTime = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return decrementTime(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  useEffect(() => {
    if (selectedTask?.taskTime) {
      setTime(timeToSeconds(selectedTask.taskTime));
    }
  }, [selectedTask]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => decrementTime(time)}>Começar</Button>
    </div>
  );
}
