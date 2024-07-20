import React, { useState, useEffect } from 'react';
import Header from './components/Header'; 
import TypeButtons from './components/TypeButtons'; 
import PokemonList from './components/PokemonList'; 

function App() {
  const [pokemonType, setPokemonType] = useState('all'); // I set up state to manage the selected Pokémon type
  const [pokemonList, setPokemonList] = useState([]); // I set up state to manage the list of Pokémon
  const [team, setTeam] = useState([]); //  manage the Pokémon team
  const [types, setTypes] = useState([]); // manage the Pokémon types

  useEffect(() => {
    // This will fetch the list of Pokémon types when the component mounts
    fetch('https://pokeapi.co/api/v2/type/')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));
  }, []);

  useEffect(() => {
    // Pokémon Trainer fetches Pokémon based on the selected type
    const url = pokemonType === 'all'
      ? 'https://pokeapi.co/api/v2/pokemon?limit=1000'
      : `https://pokeapi.co/api/v2/type/${pokemonType}/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const pokemons = pokemonType === 'all'
          ? data.results.map(p => fetch(p.url).then(res => res.json()))
          : data.pokemon.map(p => fetch(p.pokemon.url).then(res => res.json()));

        Promise.all(pokemons)
          .then(pokemons => setPokemonList(pokemons))
          .catch(error => console.error('Error fetching Pokémon details:', error));
      })
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, [pokemonType]);

  // Pokémon Trainer adds a Pokémon to the team - 6 Pokémon Only!!
  const addToTeam = (pokemon) => {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
    } else {
      alert('You can only add up to 6 Pokémon to your team.'); // Pokémon Trainer is alerted if the team is full
    }
  };

  return (
    <div>
      <Header /> {}
      <TypeButtons
        types={types}
        setPokemonType={setPokemonType}
        buttonClassName="custom-button" //  custom class for buttons
        containerClassName="custom-container" // custom class for the button container
      />
      <PokemonList pokemonList={pokemonList} addToTeam={addToTeam} /> {/* renders the Pokémon list */}
      <div>
        <h2>My Team</h2>
        <ul>
          {team.map((pokemon, index) => (
            <li key={index}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} /> {/* displays the Pokémon image */}
              {pokemon.name} {/* Pokémon Trainer displays the Pokémon name */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
