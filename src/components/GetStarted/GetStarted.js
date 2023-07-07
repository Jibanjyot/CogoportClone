import React from 'react'
import "./GetStarted.css"
import rightdropdown from "../Images/rightdropdown.svg"

const GetStarted = () => {
    return (
        <div className='get-started-background'>
            <div className='get-started-content'>
                <div className='get-started-text'>
                    <h3>Ready to take your Supply Chain to the Next Level?</h3>
                </div>
                <a target="_blank" href="https://app.cogoport.com/en-IN/signup" rel="noreferrer" style={{ textDecoration: 'none', marginBottom:15 }}>
                    <button type="button" className='button-holder'>
                        <div class="button_style">Get Started</div>
                        <img src={rightdropdown}/>
                    </button></a>
            </div>
        </div>
    )
}

export default GetStarted;