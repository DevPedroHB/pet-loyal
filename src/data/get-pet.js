import { api } from "../lib/axios";

export async function getPet(id) {
  try {
    const response = await api.get(`/pets/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);

    alert(`Não foi possível achar o pet com o id ${id}.`);

    return null;
  }
}
