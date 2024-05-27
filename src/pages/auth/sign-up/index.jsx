import { Link } from "react-router-dom";
import style from "./style.module.css";

export function SignUp() {
  return (
    <main className={style.container}>
      <form className={style.form}>
        <div className={style.title}>
          <h1>Registrar</h1>
          <p>Faça seu registro em Pet Loyal.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" placeholder="Digite seu nome" required />
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
        <button type="submit">Registrar</button>
        <small>
          Já possui uma conta? <Link to="/sign-in">Entrar</Link>
        </small>
      </form>
    </main>
  );
}
