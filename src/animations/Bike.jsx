import React from 'react';
import moto from '../assets/images/moto.png';

const MotorbikeAnimation = () => {
    return (
        <>
            <h1>Sinna's Social Club</h1>
            <div className="motorbike-container">
                <img
                    className="motorbike"
                    src={ moto }
                    alt="Motorbike"
                    id='sinna'
                />
            </div>
        </>
    );
};

export default MotorbikeAnimation;
