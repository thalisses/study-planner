import style from "./Form.module.scss";
import Button from "../Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../types/ITask";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: Props) {
  const [taskTime, setTaskTime] = useState("00:00:00");
  const [taskName, setTaskName] = useState("");

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((previousTasks) => [
      ...previousTasks,
      { taskName, taskTime, selected: false, completed: false, id: uuidv4() },
    ]);
    setTaskName("");
    setTaskTime("00:00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={handleAddNewTask}>
      <div className={style.inputContainer}>
        <label>Adicione um novo estudo</label>
        <input
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          type="text"
          name="taskName"
          id="taskName"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label>Tempo</label>
        <input
          value={taskTime}
          onChange={(event) => setTaskTime(event.target.value)}
          type="time"
          step="1"
          name="studyTime"
          id="studyTime"
          min="00:00:00"
          max="02:00:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
