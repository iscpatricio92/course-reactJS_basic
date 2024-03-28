import React, { useContext } from "react";
import PokemonContext from "../../context/pokemons";
export default function FourOFour() {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);

  return <p>Page not Found</p>;
}
