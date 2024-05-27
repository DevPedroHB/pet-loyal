import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/axios";
import style from "./style.module.css";

export function Home() {
  const [pets, setPets] = useState([]);
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();

  /**
   * useCallback retornará uma versão memorizada do retorno de chamada
   * que só muda se uma das entradas for alterada.
   */
  const getPets = useCallback(async () => {
    const response = await api.get(`/pets`);

    setPets(response.data);
  }, []);

  useEffect(() => {
    getPets();
  }, [getPets, update]);

  async function handleDelete(pet) {
    const confirmDel = confirm(`Deseja deletar o pet ${pet.nome}.`);

    if (confirmDel) {
      await api.delete(`/pets/${pet.id}`);

      setUpdate(!update);
    }
  }

  return (
    <main className={style.container}>
      <div className={style.header}>
        <div>
          <h1>Pet Loyal</h1>
          <button onClick={() => navigate("/create-pet")}>Criar</button>
        </div>
        <div>
          <input type="search" placeholder="Pesquisar" />
        </div>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Gênero</th>
            <th>Porte</th>
            <th>Raça</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.nome}</td>
              <td>{pet.idade}</td>
              <td>{pet.genero}</td>
              <td>{pet.porte}</td>
              <td>{pet.raca}</td>
              <td>{pet.cidade}</td>
              <td>{pet.telefone}</td>
              <td className={style.table__options}>
                <button
                  type="button"
                  onClick={() => navigate(`/update-pet/${pet.id}`)}
                >
                  ✏️
                </button>
                <button type="button" onClick={() => handleDelete(pet)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
