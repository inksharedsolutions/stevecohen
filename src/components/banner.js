import React from 'react'
import {Link} from 'gatsby'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <span className="first-title"></span>
                                <h1 data-aos="fade-up" data-aos-duration="2000">
                                    From Bullying to Sexual Violence
                                </h1>
                            </div>
                            {/* <img src={ImgBanner}/> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;