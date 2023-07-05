import React from 'react'
import "./Blogs.css"
import rightarrow from "../Images/rightarrow.svg"

const Blogs = () => {
    return (
        <div className='blogs-main-container'>
            <div className='blogs-sub-container'>
                <h3 className='blog-title'>Blogs</h3>
                <div role='presentation'  className='blog-container'>
                    <div className='blog'>
                        <a href='https://www.cogoport.com/en-IN/blogs/cogoport-global-trade-platform' style={{textDecoration:"none"}}>
                            <img alt="Cogoport: A Global Trade Platform" loading="lazy" width="376" height="200" decoding="async" data-nimg="1" class="blog-thumbnail" srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=384&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=828&amp;q=75 2x" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=828&amp;q=75" style={{ color: "transparent" }} />
                            <div className='blog-text-container'>
                                <h4 class="blog-text-heading-container">Expert Speak</h4>
                                <h4 class="blog-text-subheading-container">Cogoport: A Global Trade Platform</h4>
                                <p class="blog-text-style">Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.</p>
                                <div className='read-more-container'>
                                    <span role='presentation' className='read-more-text'>
                                        Read More
                                        <img src={rightarrow}/>
                                    </span>
                                    <h4 class="blog-date-style">03 July 2023</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='blog'>
                        <a href='https://www.cogoport.com/en-IN/blogs/understanding-lean-supply-chain-management' style={{textDecoration:"none"}}>
                            <img alt="Cogoport: A Global Trade Platform" loading="lazy" width="376" height="200" decoding="async" data-nimg="1" class="blog-thumbnail" srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&amp;w=384&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&amp;w=828&amp;q=75 2x"
    src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FEng_2405_Banner.png&amp;w=828&amp;q=75" style={{ color: "transparent" }} />
                            <div className='blog-text-container'>
                                <h4 class="blog-text-heading-container">Industry Basics</h4>
                                <h4 class="blog-text-subheading-container">Understanding Lean Supply Chain Management: Definition and Considerations</h4>
                                <p class="blog-text-style">Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key components? Read on!</p>
                                <div className='read-more-container'>
                                    <span role='presentation' className='read-more-text'>
                                        Read More
                                        <img src={rightarrow}/>
                                    </span>
                                    <h4 class="blog-date-style">03 July 2023</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='blog'>
                        <a href='https://www.cogoport.com/en-IN/blogs/cogoport-global-trade-platform' style={{textDecoration:"none"}}>
                            <img alt="Cogoport: A Global Trade Platform" loading="lazy" width="376" height="200" decoding="async" data-nimg="1" class="blog-thumbnail" srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=384&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=828&amp;q=75 2x" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2FCogoport_Positioning_Banner.png&amp;w=828&amp;q=75" style={{ color: "transparent" }} />
                            <div className='blog-text-container'>
                                <h4 class="blog-text-heading-container">Expert Speak</h4>
                                <h4 class="blog-text-subheading-container">Cogoport: A Global Trade Platform</h4>
                                <p class="blog-text-style">Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.</p>
                                <div className='read-more-container'>
                                    <span role='presentation' className='read-more-text'>
                                        Read More
                                        <img src={rightarrow}/>
                                    </span>
                                    <h4 class="blog-date-style">03 July 2023</h4>
                                </div>
                            </div>
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Blogs