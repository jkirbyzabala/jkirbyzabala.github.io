import React from 'react';

function PokemonList({ pokemonList, addToTeam }) {
  // I render the list of Pokémon
  return (
    <div>
      <h2>Available Pokémon</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.name}
            <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
