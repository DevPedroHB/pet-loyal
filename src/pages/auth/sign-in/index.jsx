import { Link } from "react-router-dom";
import style from "./style.module.css";

export function SignIn() {
  return (
    <main className={style.container}>
      <form className={style.form}>
        <div className={style.title}>
          <h1>Entrar</h1>
          <p>Entre em uma conta Pet Loyal.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <small>
          Não possui uma conta? <Link to="/sign-up">Registrar</Link>
        </small>
      </form>
    </main>
  );
}
