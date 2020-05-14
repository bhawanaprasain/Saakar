import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import FindJobs from "./FindJobs"
import WhySakar from "../WhySakar"
import Jobcategories from "./Jobcategories"
import RecentJobs from "./RecentJobs"

function Home(){
    return(
        <div>
            <Header />
            <FindJobs />
            <WhySakar />
            <Jobcategories/>
            <RecentJobs />
            <Subscription />
            <Footer/>
        </div>
    )
}

export default Home