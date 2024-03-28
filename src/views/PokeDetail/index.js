import { useParams } from "react-router-dom";
import React, { useEffect, useContext } from "react";

import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
//import usePokemonStore from "../../zustand/stores/pokemons";

export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
    useContext(PokemonContext);
  /*const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
    usePokemonStore((state) => ({
      getPokemonDetail: state.getPokemonDetail,
      pokemonDetail: state.pokemonDetail,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    }));*/

  useEffect(() => {
    /**
     * Cada que se cargue la pantalla o cada que cambie el ID
     * se debe solicitar el detalle del pokemon
     */
    getPokemonDetail(id).catch(null);
  }, []);
  if (isLoading) return <Loading title="Pokemon Loading" />;

  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>Information</h3>
          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
          <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>Skills</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
}
