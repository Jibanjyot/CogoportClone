import React from 'react'
import "./Prefooter2.css"

const Prefooter2 = () => {
    const destinations = [
        "Chittagong to Louisville",
        " Chittagong to Guayaquil",
        " Chennai to Chittagong",
        "Kandla to Chittagong",
        "Krishnapatnam to Chittagong",
        "Vizag to Chittagong",
        "Chittagong to Chicago (Inland) , Illinois",
        "Chittagong to Oakland",
        "Chittagong to Savannah, Georgia",
        "Chittagong to Kakinada",
    ];

    const destinations1 = [
        "Chittagong to Posorja",
        "Chittagong to Charleston , South Carolina",
        "Chittagong to Lazaro Cardenas",
        "Chittagong to Vladivostok",
        "Chittagong to Pittsburgh",
        "Chittagong to Saint Louis Du Rhone",
        "Chittagong to Greer (US)",
        "Chittagong to Port Chicago , Illinois",
        "Chittagong to Buenaventura",
        "Chittagong to Mundra",
    ];

    const destinations2 = [
        "Chittagong to Puerto Caldera",
        "Chittagong to New Orleans",
        'Hai Phong to Chittagong',
        'Chittagong to Chippewa Falls (US)',
        'Chittagong to Acajutla',
        'Chittagong to Lirquen',
        'Da Nang to Chittagong',
        'Chittagong to Cincinnati',
        'Chittagong to Mobile',
        'Chittagong to San Antonio',
    ];
    return (
        <div className='pre-footer2-main-container'>
            <div className='pre-footer2-sub-container'>
                <div className='pre-footer2-text-container'>
                    {destinations.map((text, index) => (
                        <a className='pre-footer2-text' key={index} href="#">
                            {text}
                        </a>
                    ))}
                </div>
                <div className='pre-footer2-text-container'>
                    {destinations1.map((text, index) => (
                        <a className='pre-footer2-text' key={index} href="#">
                            {text}
                        </a>
                    ))}
                </div>
                <div className='pre-footer2-text-container'>
                    {destinations2.map((text, index) => (
                        <a className='pre-footer2-text' key={index} href="#">
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Prefooter2