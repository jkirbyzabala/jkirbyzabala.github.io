import React from 'react';

function TypeButtons({ types, setPokemonType, buttonClassName, containerClassName }) {
  return (
    <div className={containerClassName}>
      <button
        className={`${buttonClassName} all`}
        onClick={() => setPokemonType('all')}
      >
        All
      </button>
      {types.map((type, index) => (
        <button
          key={index}
          className={`${buttonClassName} ${type.name}`}
          onClick={() => setPokemonType(type.name)}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default TypeButtons;
