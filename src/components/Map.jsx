import React from 'react'

function Map() {
    return (
        <div className='map-container'>
            <h1 className='title'>Ci trovi qua!</h1>
            <p className='paragraph'>Vieni a trovarci, siamo aperti tutti i giorni dalle 10:00 alle 22:00.</p>
            <div>
                <iframe width='100%' height='100%' src="https://api.mapbox.com/styles/v1/orlifera/clubb5ges004601qq2rs0h3bu.html?title=false&access_token=pk.eyJ1Ijoib3JsaWZlcmEiLCJhIjoiY2x1YmIwNXIzMHN3NTJqcW54M2ZheHF5diJ9.Qr1sq3jmJBh-hN4nAK4x_g&zoomwheel=false#15.83/45.792094/11.429937/-37.1/40" ></iframe>
            </div>
        </div>
    )
}

export default Map