import React from 'react';


function Prodotti(props) {
  const { nome_piatto, descrizione_piatto, prezzo_piatto, path, alt_image } = props;
  return (
    <div className="card">
      <img src={ path } alt={ alt_image } />
      <div className="card-info">
        <h3>{ nome_piatto }</h3>
        <p>{ descrizione_piatto }</p>
        <p>Prezzo: { prezzo_piatto }</p>
      </div>
    </div>
  );
}

export default Prodotti;
