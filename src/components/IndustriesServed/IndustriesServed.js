import React from 'react'
import "./IndustriesServed.css"

const IndustriesServed = () => {
    return (
        <div className='industries-served-main-container'>
            <div className='industries-served-sub-container'>
                <h3>Industries Served</h3>
                <div className='industry-icons-container'>
                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/chemical.svg" alt="chemical"/>
                            <div class="industry-text">Chemicals</div>
                    </div>

                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/paracetamol.svg" alt="chemical"/>
                            <div class="industry-text">Pharmaceutical</div>
                    </div>

                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/electronics.svg" alt="chemical"/>
                            <div class="industry-text">Electronics</div>
                    </div>

                    <div class="industry-card" style={{width:130,padding:15}}>
                        <img src="https://www.cogoport.com/images/whitegoods.svg" alt="chemical"/>
                            <div class="industry-text">White Goods</div>
                    </div>

                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/textiles.svg" alt="chemical"/>
                            <div class="industry-text">Textiles</div>
                    </div>

                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/manufactoring.svg" alt="chemical"/>
                            <div class="industry-text">Manufacturing</div>
                    </div>

                    <div class="industry-card">
                        <img src="https://www.cogoport.com/images/agriculture.svg" alt="chemical"/>
                            <div class="industry-text">Agriculture</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default IndustriesServed;