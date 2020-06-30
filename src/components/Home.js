import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import WhySakar from "../WhySakar"
import Jobcategories from "./Jobcategories"
import RecentJobs from "./RecentJobs"

function Home(props){
    console.log(props.isLoggedIn, "from Home");
    
    return(
        <div>
            <Header isLoggedIn={props.isLoggedIn}/>
            <WhySakar />
            <Jobcategories/>
            <RecentJobs />
            <Subscription />
            <Footer/>
        </div>
    )
}

export default Home