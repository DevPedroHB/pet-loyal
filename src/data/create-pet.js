import { api } from "../lib/axios";

export async function createPet({
  city,
  gender,
  age,
  name,
  size,
  breed,
  phone,
}) {
  try {
    await api.post("/pets", {
      city,
      gender,
      age,
      name,
      size,
      breed,
      phone,
      userId: null,
    });

    alert("Pet criado com sucesso.");
  } catch (error) {
    console.log(error);

    alert("Não foi possível cadastrar o pet.");
  }
}
