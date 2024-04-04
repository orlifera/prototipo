import React from 'react';
import '../menu.css'
import Piatto1 from '../assets/images/spaghetti.png'
import Piatto2 from '../assets/images/baccalà.png'
import Piatto3 from '../assets/images/capriolo.png'
import Piatto4 from '../assets/images/paninesopressa.png'


function Prodotti() {
  return (
      <div className="menu">
        <h2>Menu del giorno</h2>
      <div className="card">
        <img src={Piatto1} alt="Piatto spaghetti" />
        <div className="card-info">
          <h3>Piatto Spaghetti</h3>
          <p>Spaghetti al pomodoro</p>
          <p>Prezzo: €10</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto1} alt="Piatto 2" />
        <div className="card-info">
          <h3>Piatto 2</h3>
          <p>Descrizione del piatto 2.</p>
          <p>Prezzo: €12</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto1} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 3</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto2} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 4</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €7</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto2} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 5</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto2} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 6</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto3} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 7</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto4} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 8</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
      <div className="card">
        <img src={Piatto4} alt="Piatto 3" />
        <div className="card-info">
          <h3>Piatto 9</h3>
          <p>Descrizione del piatto 3.</p>
          <p>Prezzo: €15</p>
        </div>
      </div>
    </div>
  );
}

export default Prodotti;
