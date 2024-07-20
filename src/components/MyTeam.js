import React from 'react';
import { useSelector } from 'react-redux';

const MyTeam = () => {
  const team = useSelector((state) => state.team);

  return (
    <div>
      <h1>My Pokémon Team</h1>
      <ul>
        {team.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyTeam;
