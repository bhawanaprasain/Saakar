import React, { Component } from "react"
import axios from "axios"

class JobForm extends Component{
    constructor(){
        super()

        this.state = {
            title: ",jkjkjk",
            description:"khjhjkhkjh",
            category:"jljkj",
            budget:"50000",

            user: "bhawana",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
        console.log("wow")
       

        
            const jobdata = {
                title: this.state.title,
                description : this.state.description,
                category: this.state.category,
                budget: this.state.budget
     
             }

     
       

        axios({
            method: "post",
            url: "localhost:3000/create",
            data: jobdata

        }).then((response)=>{
            console.log(response);
            
        })
        .catch(function(error){
            console.log(error)
        })
    }


    render(){
        return(
            <div>
                <div class="ftco-section bg-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-8 mb-5">
                                    <form action="#" class="p-5 bg-white">
                                        <div class="row form-group">
                                            <div class="col-md-12 mb-3 mb-md-0">
                                                <label class="font-weight-bold" for="fullname">Job Title</label>
                                                <input type="text" id="fullname" class="form-control" placeholder="eg. Professional UI/UX Designer" />
                                            </div>
                                        </div>

                                        <div class="row form-group mb-5">
                                            <div class="col-md-12 mb-3 mb-md-0">
                                                <label class="font-weight-bold" for="fullname">Company</label>
                                                <input type="text" id="fullname" class="form-control" placeholder="eg. Facebook, Inc." />
                                            </div>
                                        </div>


                                <div class="row form-group">
                                    <div class="col-md-12"><h3>Job Type</h3></div>
                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <label for="option-job-type-1">
                                                <input type="radio" id="option-job-type-1" name="job-type" /> Full Time
                                            </label>
                                        </div>
                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <label for="option-job-type-2">
                                                <input type="radio" id="option-job-type-2" name="job-type" /> Part Time
                                            </label>
                                        </div>

                                        <div class="col-md-12 mb-3 mb-md-0">
                                        <label for="option-job-type-3">
                                            <input type="radio" id="option-job-type-3" name="job-type" /> Freelance
                                        </label >
                                        </div>

                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <label for="option-job-type-4">
                                                <input type="radio" id="option-job-type-4" name="job-type" /> Internship
                                            </label>
                                        </div>

                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <label for="option-job-type-4">
                                                <input type="radio" id="option-job-type-4" name="job-type" /> Temporary
                                            </label>
                                        </div>

                                </div>

                                <div class="row form-group mb-4">
                                    <div class="col-md-12"><h3>Location</h3></div>
                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <input type="text" class="form-control" placeholder="Pokhara" />
                                        </div>
                                </div>

                                <div class="row form-group mb-4">
                                    <div class="col-md-12"><h3>Budget</h3></div>
                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <input type="number" class="form-control" placeholder="" />
                                        </div>
                                </div>
                                

                                <div class="row form-group">
                                    <div class="col-md-12"><h3>Job Description</h3></div>
                                        <div class="col-md-12 mb-3 mb-md-0">
                                            <textarea name="" class="form-control" id="" cols="30" rows="5"></textarea>
                                        </div>
                                </div>

                                <div class="row form-group">
                                        <div class="col-md-12">
                                            <input type="submit" value="Post" class="btn btn-primary  py-2 px-5" />
                                        </div>
                                </div>

                    
                                </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default JobForm