import React, { useEffect } from "react";
//import PokemonsContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from "../../zustand/stores/pokemons";
import shallow from 'zustand/shallow'
export default function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore((state) => ({
      getPokemons: state.getPokemons,
      pokemons: state.pokemons,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    }),shallow);
  //const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonsContext);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);
  if (isLoading) return <Loading title="Pokemons Loading" />;

  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}
