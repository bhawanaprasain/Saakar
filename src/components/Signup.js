import React, { Component } from "react"
import "../styles/signup.css"
import Footer from "./Footer"
import Header from "./Header"

class Signup extends Component{


    render(){

        return(
            <div>
                <Header />
                  <div className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                    <form action="#" className="p-5 bg-white">
                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"><p className="username">Username</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="text" className="form-control" placeholder="" name="password" />
                                            </div>
                                        </div>

                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"><p className="password">Password</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="password" className="form-control" placeholder="" name="password" />
                                            </div>
                                        </div>

                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"><p className="email">Email</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="email" className="form-control" placeholder="" name="email" />
                                            </div>
                                        </div>

                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"><p className="address">Address</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="address" className="form-control" placeholder="" name="address" />
                                            </div>
                                        </div>
                                    
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input type="submit" value="Signup" className="btn btn-primary  py-2 px-5"  />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
        )
    }
}


export default Signup