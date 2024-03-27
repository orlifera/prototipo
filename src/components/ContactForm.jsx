import React, { useState } from 'react'
import { PhoneInput } from 'react-international-phone'
import { PhoneNumberUtil } from 'google-libphonenumber';
import 'react-international-phone/style.css';

function ContactForm() {

    const [phone, setPhone] = useState('')
    const phoneUtil = PhoneNumberUtil.getInstance();

    // const getStyle = () => {
    //     // Define styles based on the current theme
    //     if (theme === 'dark') {
    //         return {
    //             // Dark theme styles
    //             '--react-international-phone-border-radius': 0,
    //             // Add more styles specific to dark theme if needed
    //         };
    //     } else {
    //         return {
    //             // Light theme styles
    //             '--react-international-phone-border-radius': 10,
    //             // Add more styles specific to light theme if needed
    //         };

    //     }
    // };

    const isPhoneValid = (phone) => {
        try {
            return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
        } catch (error) {
            return false;
        }
    };

    const isValid = isPhoneValid(phone);

    return (
        <div className='form-container'>
            <h1 className='title'>Contattaci</h1>
            <p className='paragraph'>Il nostro team è qua per ogni tua evenienza. Inizia la live chat, apri un ticket o mandaci direttamente una mail in base alle tue esigenze. Altrimenti, chiamaci!</p>
            <ul className='contact-options'>
                <li><a href='#'>
                    <svg className='icon' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" s stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>Inizia la live chat</a></li>
                <li><a href='#'>
                    <svg className='icon' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" />
                    </svg>Manda una mail</a></li>
                <li><a href='#'>
                    <svg className='icon' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>Chiamaci</a></li>
            </ul>

            <form action="" id='contact-form'>
                <fieldset id='general'>
                    <legend hidden>Info Generali</legend>
                    <div className='name'>
                        <label htmlFor="name" >Nome</label>
                        <input type="text" id="name" name="name" placeholder='Il tuo nome' required />
                    </div>
                    <div className='surname'>
                        <label htmlFor="surname" >Cognome</label>
                        <input type="text" id="surname" name="surname" placeholder='Il tuo Cognome' required />
                    </div>
                </fieldset>
                <fieldset id='contatti'>
                    <legend hidden>Contatti</legend>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="email" placeholder='La tua mail' required />
                    <div id='phone-input'>
                        <label htmlFor="phone" >Telefono</label>
                        <PhoneInput
                            defaultCountry='it'
                            value={ phone }
                            onChange={ setPhone }
                            placeholder='Il tuo numero di telefono'
                            style={ { '--react-international-phone-border-radius': 0 } }

                        />
                        { !isValid && <div style={ { color: 'red' } }>Phone is not valid</div> }
                    </div>
                </fieldset>
                <fieldset>
                    <legend hidden>Messaggio</legend>
                    <label htmlFor="message">Messaggio</label>
                    <textarea id="message" name="message" placeholder='Di Cosa hai bisogno' required ></textarea>
                </fieldset>
                <button
                    disabled={ !isValid }
                    type="submit"
                    className='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm