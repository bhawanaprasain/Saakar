import React from "react"

function Subscription(){

    return(
        <div>
            <section className="ftco-section-parallax">
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12 text-center heading-section heading-section-white">
                            <h2>Subcribe to our Newsletter</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                            </div>
                            <div className="row d-flex justify-content-center mt-4 mb-4">
                                <div className="col-md-12">
                                    <form action="#" className="subscribe-form">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control" placeholder="Enter email address" />
                                            <input type="submit" value="Subscribe" className="submit px-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Subscription