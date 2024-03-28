import React from "react";
import RoutersApp from "./routes";
import PokemonsProvider from "./context/pokemons/Provider";

const App = () => (
  <PokemonsProvider>
    <RoutersApp />
  </PokemonsProvider>
);

export default App;
