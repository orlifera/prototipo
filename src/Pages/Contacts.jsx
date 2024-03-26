import React from 'react'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

function Contacts() {
    return (
        <div class='contacts-container'>
            <div class='form'>
                <ContactForm />
            </div>
            <div class='map'>
                <Map />
            </div>
        </div>
    )
}

export default Contacts