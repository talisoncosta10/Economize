import logo from "../../assets/logo-economize 1.png";
import style from "./login.module.scss";

export default function LoginArea() {
  return (
    <div className={style.LoginContainer}>
      
      <div className={style.SignUpArea}>
        <h1 className={style.Titulo1}>Ei, não possui uma conta?</h1>
        <h1 className={style.Titulo2}>Deixe de lado o papel e a caneta de lado e comece a anotar suas despesas conosco. </h1>
        <button className={style.BotaoBranco}>Crie sua Conta</button>
      </div>
      
      <div className={style.SignInArea}>
        
        <div className={style.LogoImagem}>
          <img src={logo} />
        </div>

        <input type="email" placeholder="E-mail" className={style.FormCampo} />
        <input type="password" placeholder="Senha" className={style.FormCampo} />
        <button className={style.BotaoAzul}>Entrar</button>
      </div>
    </div>
  );
}
