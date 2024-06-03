import { api } from "../lib/axios";

export async function adoptPet(userId, pet) {
  try {
    await api.put(`/pets/${pet.id}`, {
      ...pet,
      userId,
    });

    alert("Pet adotado com sucesso.");
  } catch (error) {
    console.log(error);

    alert("Não foi possível adotar esse pet.");
  }
}
