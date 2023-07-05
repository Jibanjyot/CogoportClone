import React from 'react'
import "./GrowFaster.css"

const GrowFaster = () => {
    return (
        <div className='grow-faster-main-container'>
            <div className='grow-faster-video-container'>
                <div class="video-thumbnail-container">
                    <img alt="About Us - Cogoport" loading="lazy" width="1232" height="450" decoding="async" data-nimg="1" class="video-thumbnail" srcset="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&amp;w=1920&amp;q=75 1x, https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&amp;w=3840&amp;q=75 2x" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&amp;w=3840&amp;q=75" style={{ color: "transparent" }} />
                    <div class="play-button-container" role="presentation">
                        <img class="styles_play_button__EeLAz" alt="Play Button" src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png" />
                    </div>
                </div>

            </div>
            <div className='grow-faster-text-container'>
                <div className='grow-faster-text-sub-container'>
                    <div className='grow-faster-text'>
                        <h3>Grow Faster With Cogoport</h3>
                        <p>Know more about Cogoport’s Global Trade Platform<sup>TM</sup></p>
                    </div>
                    <a href="/en-IN/product/logistics/global-trade-platform" style={{ textDecoration: "none" }}>
                        <button class="grow-faster-button" type="button">
                            <div class="styles_button_container__JiLtH">Know More<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{ marginLeft: 5, marginTop: 2 }}><path class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GrowFaster