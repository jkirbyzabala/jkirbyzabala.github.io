import React from 'react';
import './TypeButtons.css'; // I import the CSS file for button styling

function TypeButtons({ types, setPokemonType, buttonClassName, containerClassName }) {
  // I create buttons for each Pokémon type and style them accordingly
  return (
    <div className={containerClassName}>
      <button onClick={() => setPokemonType('all')} className={`${buttonClassName} all`}>All</button>
      {types.map((type, index) => (
        <button
          key={index}
          onClick={() => setPokemonType(type.name)}
          className={`${buttonClassName} ${type.name}`}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default TypeButtons;
