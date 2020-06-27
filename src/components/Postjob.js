import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import "../styles/postjob.css"
import Jobcategories from "./Jobcategories"
import JobForm from "./JobForm"

class PostJob extends Component{

    render(){
        console.log("props", this.props.location);
        return(
            <div>
               <Header />
                <JobForm />
                <Jobcategories />
              <Subscription />
              <Footer />
            </div>     
        )
    }
}

export default PostJob