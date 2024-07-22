import React, { useState, useEffect } from 'react';
import axios from 'axios'; // I import Axios for HTTP requests
import Header from './components/Header';
import TypeButtons from './components/TypeButtons';
import PokemonList from './components/PokemonList';
import './App.css'; 

function App() {
  const [pokemonType, setPokemonType] = useState('all');
  const [pokemonList, setPokemonList] = useState([]);
  const [team, setTeam] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    // I fetch the list of Pokémon types using Axios
    axios.get('https://pokeapi.co/api/v2/type/')
      .then(response => setTypes(response.data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));
  }, []);

  useEffect(() => {
    // I fetch Pokémon based on the selected type using Axios
    const url = pokemonType === 'all'
      ? 'https://pokeapi.co/api/v2/pokemon?limit=1000'
      : `https://pokeapi.co/api/v2/type/${pokemonType}/`;

    axios.get(url)
      .then(response => {
        const pokemons = pokemonType === 'all'
          ? response.data.results.map(p => axios.get(p.url).then(res => res.data))
          : response.data.pokemon.map(p => axios.get(p.pokemon.url).then(res => res.data));

        Promise.all(pokemons)
          .then(pokemons => setPokemonList(pokemons))
          .catch(error => console.error('Error fetching Pokémon details:', error));
      })
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, [pokemonType]);

  const addToTeam = (pokemon) => {
    if (team.length < 6) {
      setTeam([pokemon, ...team]); // The selected Pokémon go to the top of the page
    } else {
      alert('You can only add up to 6 Pokémon to your team.');
    }
  };

  return (
    <div>
      <Header />
      <TypeButtons
        types={types}
        setPokemonType={setPokemonType}
        buttonClassName="custom-button"
        containerClassName="custom-container"
      />
      <div>
        <h2>My Team</h2>
        <ul>
          {team.map((pokemon, index) => (
            <li key={index}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
      <PokemonList pokemonList={pokemonList} addToTeam={addToTeam} />
    </div>
  );
}

export default App;
