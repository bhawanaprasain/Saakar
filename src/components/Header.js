import React from "react"


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
                    <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="candidates.html" className="nav-link">Canditates</a></li>
                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                    <li className="nav-item cta mr-md-1"><a href="new-post.html" className="nav-link">Post a Job</a></li>
                    <li className="nav-item cta cta-colored"><a href="job-post.html" className="nav-link">Want a Job</a></li>
                  </ul>
                </div>
              </div>
        </nav>

        <div class="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-end justify-content-start">
                    <div class="col-md-8 ftco-animate text-center text-md-left mb-5">
                        <p class="breadcrumbs mb-0"><span class="mr-3"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact</span></p>
                        <h1 class="mb-3 bread">Contact Us</h1>
                    </div>
                    </div>
                </div>
            </div>
      </div> 

       

    )
}

export default Header