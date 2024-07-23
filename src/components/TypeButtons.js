import React from 'react';
import './TypeButtons.css';

function TypeButtons({ types, setPokemonType }) {
  return (
    <div className="custom-container">
      {types.map((type) => (
        <button
          key={type.name}
          className={`custom-button ${type.name}`}
          onClick={() => setPokemonType(type.name)}
        >
          {type.name}
        </button>
      ))}
      <button
        key="all"
        className="custom-button all"
        onClick={() => setPokemonType('all')}
      >
        All
      </button>
    </div>
  );
}

export default TypeButtons;
