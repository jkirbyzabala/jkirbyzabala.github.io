import React from 'react';
import './PokemonList.css';

// PokemonList component to display available Pokémon of the selected type
const PokemonList = ({ pokemonList, onAddToTeam }) => {
  return (
    <div className="pokemon-list">
      {pokemonList.length === 0 ? (
        <p>Please select a Pokémon type to view available Pokémon.</p>
      ) : (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              {pokemon.name}
              <button onClick={() => onAddToTeam(pokemon)}>Add to Team</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
