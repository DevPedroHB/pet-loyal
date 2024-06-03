import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../lib/axios";
import style from "./style.module.css";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      await api.post("users", {
        name,
        email,
        password,
      });

      alert("Usuário cadastrado com sucesso.");

      navigate("/sign-in");
    } catch (error) {
      console.log(error);

      alert("Não foi possível cadastrar o usuário.");
    }
  }

  return (
    <main className={style.container}>
      <form className={style.form} onSubmit={(e) => handleSignUp(e)}>
        <div className={style.title}>
          <h1>Registrar</h1>
          <p>Faça seu registro em Pet Loyal.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
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
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
