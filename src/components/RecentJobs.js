import React from "react";
import axios from "axios";
import Joblist from './Joblist'
import Pagination from './Pagination'

class RecentJobs extends React.Component {
  state = {
    jobs: [],
    currentPage: 1,
    jobsPerPage: 2, //set the jobs per page here
  };

  componentDidMount() {
    axios.get("https://sakaar-api.herokuapp.com/job/all").then((response) => {
      this.setState({ jobs: response.data });
    });
  }

  paginate = (number) => {
    this.setState({currentPage: number})
  }


  render() {
    const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
    const jobsArr = [...this.state.jobs]
    const currentJobs = jobsArr.slice(indexOfFirstJob, indexOfLastJob)
    return (
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
                <Joblist jobs={currentJobs}/>
                <Pagination jobsPerPage={this.state.jobsPerPage} totalJobs={this.state.jobs.length} paginate={this.paginate}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentJobs;
