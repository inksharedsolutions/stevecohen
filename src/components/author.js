import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../static/author/dummy-profile.jpg'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="section-title">
                    The Authors
                </div>
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content">
                        <div className="card">
                            <div className="auth-img-container">
                                <img src={AuthorImg} />
                            </div>
                            <div className="card-content">
                                <p className="author-content">
                                    Lawrence J. Altman is an adjunct professor at Avila University in Kansas City, Missouri. Until he retired in January of 2016, Mr. Altman was the Special Education Lead Attorney and Compliance Officer for Kansas City Public Schools and the Title IX Coordinator for the Kansas City School District.
                                    
                                    <Link to="/about-the-author"
                                    className="link-read">
                                        Read more
                                    </Link>
                                </p>
                                
                                <p className="margin-off auth-name">
                                    Lawrence J. Altman
                                </p>

                                <span className="span-tagline italic-tag">
                                    Author & Writer
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className="wrapper-auth-content" >    
                        <div className="card">
                            <div className="auth-img-container">
                                <img src={AuthorImg} />
                            </div>
                            <div className="card-content">
                                <p className="author-content">
                                    Steve M. Cohen, Ed.D., is President and the managing partner of the Labor Management Advisory Group and HR Solutions: On Call located in the Kansas City Metro area. Dr. Cohen has his Doctorate in Educational and Industrial Psychology, his Masters in Public Administration, and his Bachelors in Speech communications and human relations.
                                    
                                    <Link to="/about-the-author"
                                    className="link-read">
                                        Read more
                                    </Link>
                                </p>
                                
                                <p className="margin-off auth-name">
                                    Steve M. Cohen
                                </p>

                                <span className="span-tagline italic-tag">
                                    Author & Writer
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 
