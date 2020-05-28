import React from 'react'
import "../styles/searchbar.css"
function Searchbar() {
    return (
        <div>
            <div className="tab-pane fade show active align-serch-bar" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
									<form action="#" className="search-job">
										<div className="row no-gutters">
											<div className="col-md mr-md-2">
												<div className="form-group">
													<div className="form-field">
														<div className="icon"><span className="icon-briefcase"></span></div>
														<input type="text" className="form-control form-control-search" placeholder="eg. Garphic. Web Developer" />
													</div>
												</div>
											</div>
											
											<div className="col-md-4">
												<div className="form-group">
													<div className="form-field">
														<button type="submit" className="form-control btn btn-secondary searchbtn">Search</button>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
            
        </div>
    )
}


export default  Searchbar