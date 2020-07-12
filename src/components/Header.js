import React from "react"
import {Link} from "react-router-dom"
import "../styles/header.css"
import Searchbar from "./Searchbar"

function Header(props){
    const isLoggedIn = props.isLoggedIn
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
              <div className="container-fluid">
                
                {/* <a className="navbar-brand sakarlogo" href="/"></a> */}
                <Link to="/" className="navbar-brand sakarlogo"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li className="nav-item cta mr-md-1"><Link to="/postjob" className="nav-link">Post a Job</Link></li>
                    <li className="nav-item cta cta-colored"><Link to="/findjob" className="nav-link">Want a Job</Link></li>
                    <li className="nav-item dropdown">
                      <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {!isLoggedIn
                        ?
                        <div>
                          <Link to="/login" className="dropdown-item">Login</Link>
                        <Link to="/signup" className="dropdown-item">Sign Up</Link>
                        </div>
                        :
                        <Link to="#" className="dropdown-item" onClick={props.handleLogout}>Sign Out</Link>
                      }
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
        </nav>

        <div className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
          <Searchbar />
        </div>
      </div> 
    )
}

export default Header