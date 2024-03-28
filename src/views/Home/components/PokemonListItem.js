import React from "react";
import { Link } from "react-router-dom";
export default function PokemonListItem({ name, url }) {
  const getId = () => url.split("/")[6];
  return (
    <>
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${getId()}`}> View details</Link>
      </button>
    </>
  );
}
