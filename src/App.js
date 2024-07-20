import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PokemonList from './components/PokemonList';
import MyTeam from './components/MyTeam';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/my-team" element={<MyTeam />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
