import Button from "../Button";
import style from "./Stopwatch.module.scss";
import Clock from "./Clock";

export default function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
Stopwatch.propsTypes = {};
