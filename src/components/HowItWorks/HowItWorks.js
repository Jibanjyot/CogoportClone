import React, { useState } from 'react';
import "./HowItWorks.css"
import discover from "../Images/discover.svg"

const HowItWorks = () => {
    const [selectedOption, setSelectedOption] = useState('cargoOwners');

    const handleButtonClick = (option) => {
        setSelectedOption(option);
    };

    return (

        <div className='how-it-works-main-container'>
            <div className='how-it-works-inside-container'>
                <h3>How it Works</h3>
                <div className='how-it-works-button-container'>
                    <button className={selectedOption === 'cargoOwners' ? 'selected' : 'unselected'} onClick={() => handleButtonClick('cargoOwners')}>
                        For Cargo Owners
                    </button>
                    <button className={selectedOption === 'logisticsPartners' ? 'selected' : 'unselected'} onClick={() => handleButtonClick('logisticsPartners')}>
                        For Logistics Partners
                    </button>
                </div>

                {selectedOption === 'cargoOwners' && (
                    <div>
                        <div className='demo-holder'>
                            <div className='cogoport-screen-mobile'>
                                <img alt="cogoport platform with rate search" loading="lazy" width="560" height="320" decoding="async" data-nimg="1"
                                    className="laptop_image"
                                    srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=640&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=1200&amp;q=75 2x"
                                    src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=1200&amp;q=75"
                                    style={{ color: "transparent" }} />
                            </div>
                            <div className='demo-holder-sub-holder'>
                                <div className='top-stages-Class-left'>
                                    <p>Stage 1</p>
                                    <div className='how-it-works-card-subheader'>
                                        <img src={discover} />
                                        <div>Discover</div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Spot and Contract Rates for Logistics</li>
                                            <li>Service details, Trade Compliance/ Regulatory Requirements</li>
                                            <li>Knowledge and Insights on Trade, Logistics, Finance, Supply Chains</li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <div className="top-left-arrow">
                                        <img alt="line for stages" loading="lazy" decoding="async" data-nimg="1" className="arrow-image-style"
                                            srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow1.png&amp;w=256&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow1.png&amp;w=384&amp;q=75 2x"
                                            src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow1.png&amp;w=384&amp;q=75"
                                            style={{ color: "transparent" }} />
                                    </div>
                                </div>
                                <div className='bottom-stages-Class-left'>
                                    <p>Stage 2</p>
                                    <div className='how-it-works-card-subheader'>
                                        <img src={discover} />
                                        <div>Plan & Book</div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Route, Service Schedules, Inventory, and Cashflow planning</li>
                                            <li>Book with upfront visibility of service terms and inclusions</li>

                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <div className="discover-arrow"><img alt="line for stages" loading="lazy"
                                         decoding="async" data-nimg="1" className="arrow-image-style"
                                        srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow2.png&amp;w=384&amp;q=75 2x"
                                        src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow2.png&amp;w=384&amp;q=75"
                                        style={{ color: "transparent" }} /></div>
                                </div>

                            </div>

                            <div className='cogoport-screen demo-holder-sub-holder' style={{ width: "33.33%" }} >
                                <img alt="cogoport platform with rate search" loading="lazy" width="560" height="320" decoding="async" data-nimg="1"
                                    className="laptop_image"
                                    srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=640&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=1200&amp;q=75 2x"
                                    src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&amp;w=1200&amp;q=75"
                                    style={{ color: "transparent" }} />
                            </div>

                            <div className='demo-holder-sub-holder'>
                                <div>
                                    <div className="top-right-arrow"><img alt="line for stages" loading="lazy"  decoding="async" data-nimg="1"
                                        className="arrow-image-style"
                                        srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&amp;w=256&amp;q=75 1x,https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&amp;w=384&amp;q=75 2x"
                                        src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&amp;w=384&amp;q=75"
                                        style={{ color: "transparent" }} /></div>
                                </div>
                                <div className='top-stages-Class-right'>
                                    <p>Stage 3</p>
                                    <div className='how-it-works-card-subheader'>
                                        <img src={discover} />
                                        <div>Execute</div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Ocean and Air Cargo Tracking</li>
                                            <li>Documentation and Filings, Handled</li>
                                            <li>Multi-modal: Smooth coordination and handovers between various service providers and stakeholders</li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <div className="bottom-right-arrow">
                                        <img alt="home page arrow" loading="lazy" decoding="async" data-nimg="1"
                                            className="arrow-image-style"
                                            srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow4.png&amp;w=256&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow4.png&amp;w=384&amp;q=75 2x"
                                            src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow4.png&amp;w=384&amp;q=75"
                                            style={{ color: "transparent" }} /></div>
                                </div>
                                <div className='bottom-stages-Class-right'>
                                    <p>Stage 4</p>
                                    <div className='how-it-works-card-subheader'>
                                        <img src={discover} />
                                        <div>Finance</div>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Deferred payment on Logistics with PayLater</li>
                                            <li>Trade Finance for your Cargo with Export Factoring</li>
                                        </ul>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                )}
                {selectedOption === 'logisticsPartners' && (
                    <div>
                        <h2>For Logistics Partners</h2>
                        {/* Display content specific to Logistics Partners */}
                        <p>Content for Logistics Partners</p>
                    </div>
                )}

            </div>
        </div>

    );
};

export default HowItWorks;
