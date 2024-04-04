import React from 'react';
import '../menu.css'
import Piatto1 from '../assets/images/spaghetti.png'
import Piatto2 from '../assets/images/baccalà.png'
import Piatto3 from '../assets/images/capriolo.png'
import Piatto4 from '../assets/images/paninesopressa.png'


function Prodotti() {
  return (

      <div className="card">
        <img src={Piatto1} alt="Piatto spaghetti" />
        <div className="card-info">
          <h3>Piatto Spaghetti</h3>
          <p>Spaghetti al pomodoro</p>
          <p>Prezzo: €10</p>
        </div>
      </div>
      

  );
}

export default Prodotti;
