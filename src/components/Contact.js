import React from "react"
import Header from "./Header"
import "../styles/contact.css"
import Subscription from "./Subscription"
import Footer from "./Footer"


function Contact(props){

    return(
        <div>
            <Header isLoggedIn = {props.isLoggedIn} handleLogout = {props.handleLogout}/>
            <section class="ftco-section contact-section bg-light">
                <div class="container">
                    <div class="row d-flex mb-5 contact-info">
                        <div class="col-md-12 mb-4">
                            <h2 class="h3">Contact Information</h2>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-md-3">
                            <p><span>Address:</span>Lamachaur, Pokhara</p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Phone:</span> <a href="#">+977-9864421055</a></p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Email:</span> <a href="#">startup.wrc@gmail.com</a></p>
                        </div>
                        <div class="col-md-3">
                            <p><span>Website</span> <a href="#">saakar.com</a></p>
                        </div>
                    </div>
                    <div class="row block-9">
                        <div class="col-md-6 order-md-last d-flex">
                            <form action="#" class="bg-white p-5 contact-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>
                                <div class="form-group">
                                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>

                        <div class="col-md-6 d-flex">
                            <div id="map" class="bg-white"></div>
                        </div>
                    </div>
                </div>
            </section>
        <Subscription />
        <Footer />
        </div>
    )
}

export default Contact