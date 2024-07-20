import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Pokémon List</Link></li>
          <li><Link to="/my-team">My Team</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
