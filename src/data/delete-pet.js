import { api } from "../lib/axios";

export async function deletePet(id) {
  try {
    await api.delete(`/pets/${id}`);

    alert("Pet deletado com sucesso.");
  } catch (error) {
    console.log(error);

    alert("Não foi possível deletar o pet.");
  }
}
