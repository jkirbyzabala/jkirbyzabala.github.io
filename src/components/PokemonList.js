import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToTeam } from '../redux/teamSlice';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => setTypes(response.data.results))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedType) {
      axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then(response => setPokemon(response.data.pokemon.map(p => p.pokemon)))
        .catch(error => console.error(error));
    } else {
      setPokemon([]);
    }
  }, [selectedType]);

  return (
    <div>
      <h1>Pokémon List</h1>
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select a type</option>
        {types.map((type, index) => (
          <option key={index} value={type.name}>{type.name}</option>
        ))}
      </select>
      <ul>
        {pokemon.map((p, index) => (
          <li key={index}>
            {p.name}
            <button onClick={() => dispatch(addToTeam(p))}>Add to Team</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
