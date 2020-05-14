import React, { Component } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import "../styles/postjob.css"
import Jobcategories from "./Jobcategories"
import FindJobs from "./FindJobs"
import RecentJobs from "./RecentJobs"


class PostJob extends Component{

    render(){
        return(
            <div>
               <Header />
               <FindJobs />
                <Jobcategories />
              <RecentJobs />
              <Subscription />
              <Footer />
            </div>
   
        
        )
    }
}

export default PostJob