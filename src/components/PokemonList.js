import React from 'react';

const PokemonList = ({ pokemonList, addToTeam }) => {
  return (
    <div>
      <h2>Available Pokémon</h2>
      {pokemonList.length > 0 ? (
        <ul>
          {pokemonList.map(pokemon => (
            <li key={pokemon.id}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <span>{pokemon.name}</span>
              <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Select a type to see Pokémon</p>
      )}
    </div>
  );
};

export default PokemonList;
