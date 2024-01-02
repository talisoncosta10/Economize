import style from "./aboutUs.module.scss";

export default function AboutUs() {
  return (
    <div className={style.AboutUsContainer}>
      <h1 className={style.Titulo1}>Quem Somos</h1>

      <div className={style.Chat}>
        <div className={style.CardPerfil}>
          <img src="src\assets\Picasso.jpg" />

          <div className={style.RedesSociais}>
            <img src="src\assets\instagram.png" />
            <img src="src\assets\linkedin.png" />
            <img src="src\assets\github-square.png" />
          </div>
        </div>

        <div className={style.BalaoEsquerda}>
          Olá, eu sou o Thallys, tenho 20 anos, sou estudante do curso de
          Análise e desenvolvimento de sistemas na faculdade projeção. e também
          desenvolvedor nas horas vagas.
        </div>
      </div>


      <div className={style.Chat}>
      <div className={style.BalaoDireita}>
      Oi, eu sou o João Victor, tenho 19 anos, sou estudante de TI, desenvolvedor por paixão e nerd nas horas vagas. 
        </div>
        <div className={style.CardPerfil}>
          <img src="src\assets\pirata-engraçado-42840258.jpg" />

          <div className={style.RedesSociais}>
            <img src="src\assets\instagram.png" />
            <img src="src\assets\linkedin.png" />
            <img src="src\assets\github-square.png" />
          </div>
        </div>

        
      </div>

    </div>
  );
}
