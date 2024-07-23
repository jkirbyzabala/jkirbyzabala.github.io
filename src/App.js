import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TypeButtons from './TypeButtons';
import PokemonList from './PokemonList';
import GenerationFilter from './GenerationFilter';
import './App.css';

function App() {
  const [pokemonType, setPokemonType] = useState('all');
  const [pokemonList, setPokemonList] = useState([]);
  const [team, setTeam] = useState([]);
  const [types, setTypes] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [selectedGenerations, setSelectedGenerations] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
      .then(response => setTypes(response.data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));

    axios.get('https://pokeapi.co/api/v2/generation/')
      .then(response => setGenerations(response.data.results))
      .catch(error => console.error('Error fetching generations:', error));
  }, []);

  useEffect(() => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
    
    if (pokemonType !== 'all') {
      url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
    }

    axios.get(url)
      .then(response => {
        const fetchPromises = pokemonType === 'all'
          ? response.data.results.map(p => axios.get(p.url).then(res => res.data))
          : response.data.pokemon.map(p => axios.get(p.pokemon.url).then(res => res.data));

        Promise.all(fetchPromises)
          .then(pokemons => {
            if (selectedGenerations.length > 0) {
              const filteredPokemons = pokemons.filter(pokemon =>
                selectedGenerations.includes(pokemon.generation.name)
              );
              setPokemonList(filteredPokemons);
            } else {
              setPokemonList(pokemons);
            }
          })
          .catch(error => console.error('Error fetching Pokémon details:', error));
      })
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, [pokemonType, selectedGenerations]);

  const addToTeam = (pokemon) => {
    if (team.length < 6) {
      setTeam([pokemon, ...team]);
    } else {
      alert('You can only add up to 6 Pokémon to your team.');
    }
  };

  return (
    <div className="app">
      <Header />
      <TypeButtons
        types={types}
        setPokemonType={setPokemonType}
        buttonClassName="custom-button"
        containerClassName="custom-container"
      />
      <GenerationFilter
        generations={generations}
        selectedGenerations={selectedGenerations}
        setSelectedGenerations={setSelectedGenerations}
      />
      <div className="team">
        <h2>My Team</h2>
        <ul className="team-list">
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
