import React, { Component } from "react"
import "../styles/login.css"
import Footer from "./Footer"
import Header from "./Header"
import {Link} from "react-router-dom"

class Login extends Component{


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

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <Link to="/postjob"><input type="submit" value="Login" className="btn btn-primary  py-2 px-5"  /></Link>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <p className="direct-to-signup">If you do not have an account <span className="signuplink"><Link to="/signup">  SIGNUP</Link></span></p>
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


export default Login