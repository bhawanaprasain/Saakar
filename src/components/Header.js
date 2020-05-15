import React from "react"
import {Link} from "react-router-dom"

function Header(){

    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
              <div className="container">
                <a className="navbar-brand" href="index.html">Sakar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li className="nav-item cta mr-md-1"><Link to="/login" className="nav-link">Post a Job</Link></li>
                    <li className="nav-item cta cta-colored"><Link to="/findjob" className="nav-link">Want a Job</Link></li>
                  </ul>
                </div>
              </div>
        </nav>

        <div className="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-start">
                    <div className="col-md-8 ftco-animate text-center text-md-left mb-5">
                        <p className="breadcrumbs mb-0"><span className="mr-3"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact</span></p>
                        <h1 className="mb-3 bread">Contact Us</h1>
                    </div>
                    </div>
                </div>
            </div>
      </div> 

       

    )
}

export default Header