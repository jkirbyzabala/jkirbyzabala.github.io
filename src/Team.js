import React from 'react';
import './Team.css';

// Team component to display the selected Pokémon
const Team = ({ team }) => {
  return (
    <div className="my-team">
      <h2>My Team</h2>
      {team.length === 0 ? (
        <p>No Pokémon added to the team yet.</p>
      ) : (
        <ul>
          {team.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Team;
