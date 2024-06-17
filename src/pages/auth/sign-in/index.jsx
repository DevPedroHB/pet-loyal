import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";
import style from "./style.module.css";

export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = useAuth();

  async function handleSignIn(e) {
    e.preventDefault();

    await signIn({ email, password });

    navigate("/dashboard");
  }

  return (
    <main className={style.container}>
      <form className={style.form} onSubmit={(e) => handleSignIn(e)}>
        <div className={style.title}>
          <h1>Entrar</h1>
          <p>Entre em uma conta Pet Loyal.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Type your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
