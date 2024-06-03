import { api } from "../lib/axios";

export async function fetchPets() {
  try {
    const response = await api.get("/pets");

    return {
      pets: response.data,
    };
  } catch (error) {
    console.log(error);

    alert("Não foi possível trazer os pets.");

    return {
      pets: [],
    };
  }
}
