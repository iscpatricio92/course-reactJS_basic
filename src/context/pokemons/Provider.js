import React, { useState } from "react";
import PokemonContext from "./index";
import apiCall from "../../api";
export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const getPokemons = async () => {
    try {
      setisLoading(true);
      setHasError(false);
      setErrorMessage("");
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setHasError(true);
      setErrorMessage("Error happening");
    } finally {
      setisLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("Id is required");
    try {
      setisLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (error) {
      console.error(error);
      setPokemonDetail({});
      setErrorMessage("Error happening");
      setHasError(true);
      
    } finally {
      setisLoading(false);
    }
  };
  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        errorMessage,
        hasError
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
