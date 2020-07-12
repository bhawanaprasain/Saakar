import React from "react"
import Header from "./Header"
import "../styles/contact.css"
import Subscription from "./Subscription"
import Footer from "./Footer"

// emailJS
import emailjs from 'emailjs-com'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'sakaartemplae', '.contact-form', 'user_qhT98TjfEIPjCSkrvmVO3')
         .then((response) => alert('We will be in contact with you shortly.'))
         .catch((err) => alert("Oops! Please Try Again."))

         this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
         })
    }

    render() {
        return(
            <div>
                <Header isLoggedIn = {this.props.isLoggedIn} handleLogout = {this.props.handleLogout}/>
                <section className="ftco-section contact-section bg-light">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info">
                            <div className="col-md-12 mb-4">
                                <h2 className="h3">Contact Information</h2>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3">
                                <p><span>Address:</span>Lamachaur, Pokhara</p>
                            </div>
                            <div className="col-md-3">
                                <p><span>Phone:</span> <a href="!#">+977-9864421055</a></p>
                            </div>
                            <div className="col-md-3">
                                <p><span>Email:</span> <a href="!#">startup.wrc@gmail.com</a></p>
                            </div>
                            <div className="col-md-3">
                                <p><span>Website</span> <a href="!#">saakar.com</a></p>
                            </div>
                        </div>
                        <div className="row block-9">
                            <div className="col-md-6 order-md-last d-flex">
                                <form action="#" className="bg-white p-5 contact-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name"  value={this.state.name} placeholder="Your Name" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email"  value={this.state.email} placeholder="Your Email" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject"  value={this.state.subject} placeholder="Your Subject" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group">
                                        <textarea  id="" cols="30" rows="7" className="form-control" name="message" placeholder="Your Message" value={this.state.message} onChange={this.handleInput}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" onClick={this.handleSubmit}/>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-6 d-flex">
                                <div id="map" className="bg-white"></div>
                            </div>
                        </div>
                    </div>
                </section>
            <Subscription />
            <Footer />
            </div>
        )
    }
}

export default Contact