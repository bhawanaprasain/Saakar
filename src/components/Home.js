import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Subscription from "./Subscription"
import WhySakar from "../WhySakar"
import Jobcategories from "./Jobcategories"
import RecentJobs from "./RecentJobs"

function Home(props){
    
    return(
        <div>
            <Header isLoggedIn={props.isLoggedIn} handleLogout = {props.handleLogout}/>
            <WhySakar />
            <Jobcategories/>
            <RecentJobs />
            <Subscription />
            <Footer/>
        </div>
    )
}

export default Home