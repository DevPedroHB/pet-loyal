import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPet } from "../../../data/get-pet";
import { updatePet } from "../../../data/update-pet";
import style from "./style.module.css";

export function UpdatePet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("Macho");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("Pequeno");
  const [breed, setBreed] = useState("");
  const [phone, setPhone] = useState("");

  const getPetCallback = useCallback(async () => {
    try {
      const pet = await getPet(id);

      setCity(pet.city);
      setGender(pet.gender);
      setAge(pet.age);
      setName(pet.name);
      setSize(pet.size);
      setBreed(pet.breed);
      setPhone(pet.phone);
    } catch (error) {
      console.log(`Houve um erro ao buscar o pet: ${error}`);

      navigate("/");
    }
  }, [id, navigate]);

  async function handleUpdatePet(e) {
    e.preventDefault();

    await updatePet(id, {
      city,
      gender,
      age,
      name,
      size,
      breed,
      phone,
    });

    navigate("/");
  }

  useEffect(() => {
    getPetCallback();
  }, [id, getPetCallback]);

  return (
    <main className={style.container}>
      <form className={style.form} onSubmit={(e) => handleUpdatePet(e)}>
        <div className={style.title}>
          <h1>Create</h1>
          <p>Register a pet.</p>
        </div>
        <div className={style.field}>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            type="text"
            placeholder="Digite a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="gender">Gênero</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="age">Idade</label>
          <input
            id="age"
            type="number"
            placeholder="Digite a idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="size">Porte</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>
        <div className={style.field}>
          <label htmlFor="breed">Raça</label>
          <input
            id="breed"
            type="text"
            placeholder="Digite a raça"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>
        <div className={style.field}>
          <label htmlFor="tel">Telefone</label>
          <input
            id="tel"
            type="text"
            placeholder="Digite o telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </main>
  );
}
