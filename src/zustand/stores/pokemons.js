import { create } from "zustand";
import apiCall from "../../api";
const usePokemonsStore = create((set, get) => ({
  getPokemons: async () => {
    try {
      set({ isLoading: false, hasError: false, errorMessage: "" });
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      set({ pokemons: pokemonsResult.results });
    } catch (err) {
      set({
        isLoading: false,
        hasError: true,
        errorMessage: "Error resolving pokemons",
        pokemons: [],
      });
    } finally {
      set({ isLoading: false });
    }
  },
  pokemons: [],
  getPokemonDetail: async (id) => {
    try {
      if (!id) Promise.reject("Id is required");
      set({ isLoading: false, hasError: false, errorMessage: "" });
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      set({ pokemonDetail });
    } catch (error) {
      set({
        hasError: true,
        setErrorMessage: "Error happening, verify your conection",
        pokemonDetail: {},
      });
    } finally {
      set({ isLoading: false });
    }
    /**
     *     
    
     */
  },
  pokemonDetail: {},
  isLoading: false,
  errorMessage: "",
  hasError: false,
}));

export default usePokemonsStore;

/**
 *
 */
