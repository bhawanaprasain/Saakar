import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import "../styles/postjob.css"
import Jobcategories from "./Jobcategories"
import JobForm from "./JobForm"

class PostJob extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
               <Header isLoggedIn={this.props.isLoggedIn} handleLogout = {this.props.handleLogout}/>
                <JobForm isLoggedIn={this.props.isLoggedIn}/>
                <Jobcategories />
              <Subscription />
              <Footer />
            </div>     
        )
    }
}

export default PostJob