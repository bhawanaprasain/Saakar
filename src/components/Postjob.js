import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import "../styles/postjob.css"
import Jobcategories from "./Jobcategories"
import FindJobs from "./FindJobs"
import RecentJobs from "./RecentJobs"
import JobForm from "./JobForm"

class PostJob extends Component{

    render(){
        return(
            <div>
               <Header />
               <FindJobs />
                <Jobcategories />
                <JobForm />
              <RecentJobs />
              <Subscription />
              <Footer />
            </div>
   
        
        )
    }
}

export default PostJob