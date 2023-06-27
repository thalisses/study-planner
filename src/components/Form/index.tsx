import style from "./Form.module.scss";
import Button from "../Button";
import React, { useState } from "react";
import { ITasks } from "../../types/tasks";

export default function Form(props: {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}) {
  const [taskTime, setTaskTime] = useState("00:00");
  const [taskName, setTaskName] = useState("");
  const { setTasks } = props;

  const handleOnChangeTaskTime = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskTime(event.target.value);
  };

  const handleOnChangeTaskName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskName(event.target.value);
  };

  const handleAddNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((previousTasks) => [...previousTasks, { taskName, taskTime }]);
  };

  return (
    <form className={style.novaTarefa} onSubmit={handleAddNewTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          value={taskName}
          onChange={handleOnChangeTaskName}
          type="text"
          name="taskName"
          id="taskName"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          value={taskTime}
          onChange={handleOnChangeTaskTime}
          type="time"
          step="1"
          name="studyTime"
          id="studyTime"
          min="00:00:00"
          max="05:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
