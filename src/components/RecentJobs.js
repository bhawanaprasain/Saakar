import React from "react"
import axios from "axios"

class RecentJobs extends React.Component {
	state = {
		jobs: []
	}

	componentDidMount() {
		axios.get("http://sakaar-api.herokuapp.com/job/all")
		 .then(response => {
			 this.setState({jobs: response.data})
		 })
		
	}

  render() {
      return(
      <div>
          <section className="ftco-section bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="row justify-content-center pb-3">
                    <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                      <span className="subheading">Recently Added Jobs</span>
                      <h2 className="mb-4">Hot Jobs</h2>
                    </div>
                  </div>
                    <div className="row">
					{this.state.jobs.map(job => {
						return (
							<div className="col-md-12 ftco-animate fadeInUp ftco-animated" key={job._id}>
                      <div className="job-post-item py-4 d-block d-lg-flex align-items-center">
                        <div className="one-third mb-4 mb-md-0">
                          <div className="job-post-item-header d-flex align-items-center">
                            <h2 className="mr-3 text-black"><a href="#">{job.title}</a></h2>
                            <div className="badge-wrap">
                             <span className="bg-danger text-white badge py-2 px-3">Part time</span>
                            </div>
                          </div>
                          <div className="job-post-item-body d-block d-md-flex">
                            <div className="mr-3"><span className="icon-user"></span> <a href="#">{job.user.name}</a></div>
                            <div><span className="icon-money"></span> <span>{job.budget}</span></div>
                          </div>
                        </div>

                        <div className="one-forth ml-auto d-flex align-items-center">
                          <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                  <span className="icon-heart"></span>
                              </a>
                          </div>
                          <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                        </div>
                      </div>
                    </div>

						)
					})}
                  </div>
                  <div className="row mt-5">
                    <div className="col text-center">
                      <div className="block-27">
                        <ul>
                          <li><a href="#">&lt;</a></li>
                          <li className="active"><span>1</span></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">&gt;</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
              </div>
          </section>
          

      </div>
      )
  }
}

export default RecentJobs