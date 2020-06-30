import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function About(props){

    return(
        <div>
            <Header isLoggedIn = {props.isLoggedIn} />
            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="intro row text-center justify-content-center">
                                <h2 class="mb-4">Welcome to Saakar</h2>
                                <p>Saakar is startup initiative for freelancing.
                                    We mediate between job providers and job seekers.
                                    We strive for helping freelancers for more than 15 categories by  providing regular updates about trending job and work progress.
                                    Be sure, we will never let you worry about payment hurdles throught the process of job.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <Footer />

        </div>
    )
}

export default About