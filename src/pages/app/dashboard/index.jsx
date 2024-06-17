import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adoptPet } from "../../../data/adopt-pet";
import { deletePet } from "../../../data/delete-pet";
import { fetchPets } from "../../../data/fetch-pets";
import { formatPhone } from "../../../functions/format-phone";
import { useAuth } from "../../../hooks/use-auth";
import style from "./style.module.css";

export function Dashboard() {
  const [pets, setPets] = useState([]);
  const [petsFiltered, setPetsFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const fetchPetsCallback = useCallback(async () => {
    const { pets } = await fetchPets();

    setPets(pets);
  }, []);

  async function handleDeletePet(pet) {
    const confirmDel = confirm(`Deseja deletar o pet ${pet.nome}.`);

    if (confirmDel) {
      await deletePet(pet.id);

      setUpdate(!update);
    }
  }

  async function handleAdoptPet(pet) {
    if (!user) {
      alert("Você precisa estar logado para adotar um pet.");

      navigate("/sign-in");

      return;
    }

    const confirmAdopt = confirm(`Deseja adotar o pet ${pet.name}.`);

    if (confirmAdopt) {
      await adoptPet(user.id, pet);

      setUpdate(!update);
    }
  }

  useEffect(() => {
    fetchPetsCallback();
  }, [fetchPetsCallback, update]);

  useEffect(() => {
    if (search.trim() !== "") {
      const filteredPets = pets.filter((pet) =>
        pet.name.toLowerCase().includes(search.toLowerCase()),
      );

      setPetsFiltered(filteredPets);
    } else {
      setPetsFiltered(pets);
    }
  }, [search, pets]);

  return (
    <main className={style.container}>
      <div className={style.header}>
        <div>
          <h1>Pet Loyal</h1>
          <button onClick={() => navigate("/create-pet")}>Criar</button>
        </div>
        <div>
          <input
            type="search"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2>Pets para adoção</h2>
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
            {petsFiltered
              .filter((pet) => pet.userId === null)
              .map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.gender}</td>
                  <td>{pet.size}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.city}</td>
                  <td>{formatPhone(pet.phone)}</td>
                  <td className={style.table__options}>
                    <button
                      type="button"
                      onClick={() => navigate(`/update-pet/${pet.id}`)}
                    >
                      ✏️
                    </button>
                    <button type="button" onClick={() => handleAdoptPet(pet)}>
                      ➕
                    </button>
                    <button type="button" onClick={() => handleDeletePet(pet)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Pets adotados</h2>
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
            {petsFiltered
              .filter((pet) => pet.userId !== null)
              .map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.gender}</td>
                  <td>{pet.size}</td>
                  <td>{pet.breed}</td>
                  <td>{pet.city}</td>
                  <td>{formatPhone(pet.phone)}</td>
                  <td className={style.table__options}>
                    <button
                      type="button"
                      onClick={() => navigate(`/update-pet/${pet.id}`)}
                    >
                      ✏️
                    </button>
                    <button type="button" onClick={() => handleDeletePet(pet)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
