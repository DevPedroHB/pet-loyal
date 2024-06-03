import { api } from "../lib/axios";

export async function updatePet(
  id,
  { city, gender, age, name, size, breed, phone },
) {
  try {
    await api.put(`/pets/${id}`, {
      city,
      gender,
      age,
      name,
      size,
      breed,
      phone,
    });

    alert("Pet atualizado com sucesso.");
  } catch (error) {
    console.log(error);

    alert("Não foi possível atualizar o pet.");
  }
}
