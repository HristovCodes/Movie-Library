import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Nav.scss';

export default function Nav() {
  return (
    <nav className="Nav">
        <h2>My Movie Collection</h2>
        <SearchForm></SearchForm>
    </nav>
  );
}