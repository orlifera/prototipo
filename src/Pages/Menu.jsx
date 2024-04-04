import React from 'react';
import Prodotti from '../components/Prodotti';

function Menu() {
  return (
    <div className="menu">
        <h2>Menu del giorno</h2>
        <Prodotti />
    </div>
  );
}

export default Menu;
