import React from 'react';
import PropTypes from 'prop-types';

// This renders a list of Pokémon and provides an option to add each Pokémon to the team
function PokemonList({ pokemonList, addToTeam }) {
  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} /> {/* displays the Pokémon image */}
            {pokemon.name} {/* Pokémon Trainer displays the Pokémon name */}
            <button onClick={() => addToTeam(pokemon)}>Add to Team</button> {/* provides a button to add Pokémon to the team */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// PropTypes for type checking
PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  addToTeam: PropTypes.func.isRequired,
};

export default PokemonList;
