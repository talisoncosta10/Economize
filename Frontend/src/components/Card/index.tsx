import style from "./card.module.scss";
import predio from "../../assets/PredioAzul.png";

export default function Card() {
  return (
    <div className={style.CardContainer}>
      <div className={style.Img}>
        <div className={style.Img2}>{' teste'}</div>
        <div className={style.Img2}>{' teste'}</div>
      </div>

      <div className={style.Titulo}>
        <h1>Está esperando o que? Economize.</h1>
      </div>
    </div>
  );
}
