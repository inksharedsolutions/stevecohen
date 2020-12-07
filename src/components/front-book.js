import React from 'react'
import FrontBook from '../static/book/book-min.png'
import { Link } from 'gatsby'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1>
                                From <span>Bullying</span> to Sexual <span>Violence</span>
                            </h1>
                            <span></span>
                            <p >
                            If you have a student who has been victimized while at school, you will need the information in this book to hold administrator's "feet to the fire" to provide protection for your son or daughter.<br /><br />
                            Unfortunately, many administrators cannot be counted upon to do what is right in a situation where your child has been victimized. They are often well intentioned but sadly we have seen over and over that they either don't know what to do or won't do what is needed to do when confronted with the victimized student.
                            </p>

                            <Link to="/about-the-book" className="btn-read-more" >Read More</Link>
                        </div>

                        <div className="book-wraps" >
                            <img src={FrontBook} alt="book"/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook