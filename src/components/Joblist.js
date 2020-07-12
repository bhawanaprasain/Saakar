import React from 'react'

export default function Joblist({jobs}) {
  console.log(jobs);
    return (
        <div className="row">
        {jobs.map((job) => {
          return (
            <div
              className="col-md-12 ftco-animate fadeInUp ftco-animated"
              key={job._id}
            >
              <div className="job-post-item py-4 d-block d-lg-flex align-items-center">
                <div className="one-third mb-4 mb-md-0">
                  <div className="job-post-item-header d-flex align-items-center">
                    <h2 className="mr-3 text-black">
                      <a href="!#">{job.title}</a>
                    </h2>
                    <div className="badge-wrap">
                      <span className="bg-danger text-white badge py-2 px-3">
                        Part time
                      </span>
                    </div>
                  </div>
                  <div className="job-post-item-body d-block d-md-flex">
                    <div className="mr-3">
                      <span className="icon-user"></span>{" "}
                      <a href="!#">{job.user.name}</a>
                    </div>
                    <div>
                      <span className="icon-money"></span>{" "}
                      <span>{job.budget}</span>
                    </div>
                  </div>
                </div>

                <div className="one-forth ml-auto d-flex align-items-center">
                  <div>
                    <a
                      href="!#"
                      className="icon text-center d-flex justify-content-center align-items-center icon mr-2"
                    >
                      <span className="icon-heart"></span>
                    </a>
                  </div>
                  <a
                    href="job-single.html"
                    className="btn btn-primary py-2"
                  >
                    Apply Job
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
}
