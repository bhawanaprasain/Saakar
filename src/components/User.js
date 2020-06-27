import React, { Component } from "react"
import "../styles/login.css"
import Footer from "./Footer"
import Header from "./Header"
import {Link} from "react-router-dom"
import axios from "axios"


class Login extends Component{
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            login: false,
            store: null
        }
    }



    login(){
        // fetch('http://localhost:3000/user/signin',{
        //     method: "POST",
        //     body: JSON.stringify(this.state)
        // })
        //   .then(response => response.json()
        //                         .then(result => console.log(result))
        //                         .catch(err => console.log(err, "asdf"))
        //   )
        //   .catch(err => console.log(err, 'sadf'))

        axios({
            method: 'post',
            url: 'http://sakaar-api.herokuapp.com/user/signin',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
         .then(response => {
             console.log(response);
             
             localStorage.setItem('login',JSON.stringify({
                login: true,
                token: response.data
             }))
            })
         .catch(err => console.log(err, ""))
    }
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
                                            <div className="col-md-12"><p className="email">Email</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="email" className="form-control" placeholder="" name="email" onChange={(event) => {this.setState({email: event.target.value})}} />
                                            </div>
                                        </div>
                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"><p className="password">Password</p></div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <input type="password" className="form-control" placeholder="" name="password" onChange={(event) => {this.setState({password: event.target.value})}}/>
                                            </div>
                                        </div>


                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <button type="submit" value="Login" className="btn btn-primary  py-2 px-5" onClick={()=>{this.login()}} >Login</button>
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