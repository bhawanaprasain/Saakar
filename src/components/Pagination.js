import React from "react";

export default function Pagination({jobsPerPage, totalJobs, paginate}) {
    const pageNumbers = [];
    for (let i=1;i<=Math.ceil(totalJobs/jobsPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div className="row mt-5">
      <div className="col text-center">
        <div className="block-27">
          <ul>
            {/* <li>
              <a href="#">&lt;</a>
            </li>
            <li className="active">
              <span>1</span>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">&gt;</a>
            </li> */}
            {pageNumbers.map((page) => (
              <li key={page}>
                <a href="!#" onClick={() => paginate(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
