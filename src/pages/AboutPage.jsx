import React from 'react'
import '../index.css'
import imgProva from '../assets/images/cars.jpeg'

function About() {

    const peopleArray = [
        {
            name: "John Doe",
            title: "CEO",
            image: imgProva
        },
        {
            name: "Jane Doe",
            title: "CTO",
            image: imgProva
        },
        {
            name: "John Doe",
            title: "CEO",
            image: imgProva
        },
        {
            name: "Jane Doe",
            title: "CTO",
            image: imgProva
        }
    ];

    const factsArray = [
        {
            title: "Title",
            description: "Description"
        },
        {
            title: "Title",
            description: "Description"
        },
        {
            title: "Title",
            description: "Description"
        }
    ];

    return (
        <div className="aboutus">
            <div className="aboutus_box">
                <div className="aboutus_box_hero">
                    <div className="aboutus_box_hero_left">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim eget ligula dignissim eleifend. Etiam dignissim justo ac mauris dapibus, et consequat odio porttitor.</p>
                    </div>
                    <div className="aboutus_box_hero_right">
                        <img src={ imgProva } width={ 500 } height={ 500 } alt="About Us" />
                    </div>
                </div>

                <div className="aboutus_box_title">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim eget ligula dignissim eleifend. Etiam dignissim justo ac mauris dapibus, et consequat odio porttitor.</p>
                </div>

                <div className="aboutus_box_founder">
                    <div className="aboutus_box_founder_box">
                        { peopleArray.map((person, index) => (
                            <div className="aboutus_box_founder_box_image">
                                <img src={ person.image }
                                    alt={ person.name }
                                    width={ 500 }
                                    height={ 500 }
                                    className='aboutus_box_founder_box_image_img' />
                                <h3>{ person.name }</h3>
                                <p>{ person.title }</p>
                            </div>
                        )) }
                    </div>
                </div>

                <div className="aboutus_box_title">
                    <h2>Qualcosa</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim eget ligula dignissim eleifend. Etiam dignissim justo ac mauris dapibus, et consequat odio porttitor.</p>
                </div>

                <div className="aboutus_box_facts">
                    <div className="aboutus_box_facts_box">
                        { factsArray.map((fact, index) => (
                            <div className="aboutus_box_facts_box_info">
                                <h3>{ fact.title }</h3>
                                <p>{ fact.description }</p>
                            </div>
                        )) }
                    </div>
                </div>

            </div>
        </div>
    )
}

// https://www.pinterest.it/pin/907193918676274779/
// https://www.pinterest.it/pin/831477149973720215/


// https://www.youtube.com/watch?v=KkQATIXBY5w

// https://www.youtube.com/watch?v=16LwJGlNcJ0

export default About