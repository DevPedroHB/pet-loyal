import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/axios";
import style from "./style.module.css";

export function CreatePet() {
  const [cidade, setCidade] = useState("");
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [porte, setPorte] = useState("pequeno");
  const [raca, setRaca] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate();

  async function createPet(e) {
    e.preventDefault();

    try {
      await api.post("/pets", {
        cidade,
        genero,
        idade,
        nome,
        porte,
        raca,
        telefone,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={style.container}>
      <form className={style.form} onSubmit={(e) => createPet(e)}>
        <div className={style.title}>
          <h1>Criar</h1>
          <p>Cadastrar um pet.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            placeholder="Digite a cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="gender">Gênero</label>
          <input
            id="gender"
            type="text"
            placeholder="Digite o gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="age">Idade</label>
          <input
            id="age"
            type="number"
            placeholder="Digite a idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="size">Porte</label>
          <select
            id="size"
            value={porte}
            onChange={(e) => setPorte(e.target.value)}
          >
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="race">Raça</label>
          <input
            id="race"
            type="text"
            placeholder="Qual á raça do pet"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="tel">Telefone</label>
          <input
            id="tel"
            type="text"
            placeholder="Digite seu número"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
