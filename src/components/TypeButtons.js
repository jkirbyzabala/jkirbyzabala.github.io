import React from 'react';
import PropTypes from 'prop-types';

// This creates buttons for each Pokémon type. I'll customize later
function TypeButtons({ types, setPokemonType, buttonClassName, containerClassName }) {
  return (
    <div className={containerClassName}>
      <button className={buttonClassName} onClick={() => setPokemonType('all')}>
        All
      </button>
      {types.map(type => (
        <button
          key={type.name}
          className={buttonClassName}
          onClick={() => setPokemonType(type.name)}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

// PropTypes for type checking and provides default values
TypeButtons.propTypes = {
  types: PropTypes.array.isRequired,
  setPokemonType: PropTypes.func.isRequired,
  buttonClassName: PropTypes.string,
  containerClassName: PropTypes.string,
};

TypeButtons.defaultProps = {
  buttonClassName: 'default-button', //  sets the default class for buttons
  containerClassName: 'button-container', // sets the default class for the button container
};

export default TypeButtons;
