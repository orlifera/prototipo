import React from 'react';
import Prodotti from '../components/Prodotti';
import spaghetti from '../assets/images/spaghetti.png';
import baccalà from '../assets/images/baccalà.png';
import capriolo from '../assets/images/capriolo.png';
import panino from '../assets/images/paninesopressa.png';


function Menu() {
  return (
    <div className="menu">
      <Prodotti 
        nome_piatto="Spaghetti al pomodoro"
        descrizione_piatto="Pasta con pomodoro" 
        prezzo_piatto="€10"
        path={spaghetti}
        alt_image="Spaghetti al pomodoro"
      />
       <Prodotti 
        nome_piatto="Baccalà"
        descrizione_piatto="Baccalà" 
        prezzo_piatto="€12"
        path={baccalà}
        alt_image="Baccalà"
      />
       {/* <Prodotti 
        nome_piatto="Panino e sopressa"
        descrizione_piatto="Miglior piatto del mondo" 
        prezzo_piatto="€5"
        path={panino}
        alt_image="Panino e sopressa"
      /> */}
    </div>
  );
}

export default Menu;
