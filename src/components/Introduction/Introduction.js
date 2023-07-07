import React from 'react'
import "./Introduction.css"
import whatsapplogo from "../Images/whatsapplogo.svg"
import downarrow from "../Images/downarrowlogo.svg"


const Introduction = () => {
    return (
        <div className='intro-container'>
            <div className='intro-video-container'>
                <div className='intro-text-container'>
                    <h1>Grow Faster, Go Global</h1>
                    <p className='intro-paragraph-container'>
                        Strengthen your Supply Chain and, Scale your Business
                        <br />
                        with Reliable Shippig and Cashflows
                    </p>
                    <div >
                        <form>
                            <p>Talk to us now!</p>
                            <div className='whatsapp-container'>
                                <img src={whatsapplogo} className='whatsapp-logo' alt='whatsapp logo' />
                                <div className="form-group">
                                    <select className="form-control" id="countryCode">
                                        <option value="+1">+1</option>
                                        <option value="+91">+91</option>
                                    </select>
                                </div>
                                
                                <div className='downarrow' role="button" aria-label="button" tabindex="0">
                                <img src={downarrow} className='downarrow' alt='downarrow'/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="phoneNumber"/>
                                </div>
                                <button className="button-style">Get Started</button>
                            </div>
                            
                        </form>
                    </div>

                </div>

                <video autoPlay muted loop playsInline className='video-box'>
                    <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_2_webm.webm" type='video/webm'/>
                </video>
                <video autoPlay muted loop playsInline className='video-box2'>
                    <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/mobile-track-shipment.webm" type='video/webm'/>
                </video>

                

            </div>
        </div>
    )
}

export default Introduction;