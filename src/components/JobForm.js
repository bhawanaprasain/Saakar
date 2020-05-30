import React, { Component } from "react"
import axios from "axios"

class JobForm extends Component{
    constructor(){
        super()

        this.state = {
            title: "",
            description:"",
            category:"",
            budget:"",
            location: "",
            description: "",

          
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
       }

       handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
    
        })

    
    }
    handleSubmit(){
        
        
        const jobdata ={
            title: this.state.title,
            description:this.state.description,
            category:this.state.category,
            budget:this.state.budget,
            location: this.state.location,
            description: this.state.description,

        }
        
        axios({
            method: "post",
            url: "",
            data: jobdata

        }).then((response)=>{
            alert(response);
            
        })
        .catch(function(error){
            alert(error)
        })
    }


    render(){
        return(
            <div>
                <div className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                    <form action="#" className="p-5 bg-white">
                                        <div className="row form-group">
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <label className="font-weight-bold" htmlFor="fullname">Job Title</label>
                                                <input type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer"  name="title" onChange={this.handleInput} /><br/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold">Describe the details of service you are looking for. Mention all minute details.</label>
                                            </div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <textarea name="" className="form-control" id="" cols="50" rows="7" name="description" onChange={this.handleInput}></textarea><br/>
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12"><label className="font-weight-bold">Job Type</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-type-1">
                                                        <input type="radio" id="option-job-type-1" name="job-type" name="category" onChange={this.handleInput}/> Full Time
                                                    </label>
                                                </div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-type-2">
                                                        <input type="radio" id="option-job-type-2" name="job-type" name="category" onChange={this.handleInput}/> Part Time
                                                    </label>
                                                </div>

                                                <div className="col-md-12 mb-3 mb-md-0">
                                                <label htmlFor="option-job-type-3">
                                                    <input type="radio" id="option-job-type-3" name="job-type" name="category" onChange={this.handleInput}/> Freelance
                                                </label ><br/><br/>
                                                </div>
                                                <div className="row form-group">

                                                    <div className="col-md-12">
                                                        <label className="font-weight-bold">If you have any sample file please attach file.</label><br/>
                                                        <input type="submit" value="Attach file" className="btn btn-primary  py-2 px-5" /><br/><br/>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-type-4">
                                                        <input type="radio" id="option-job-type-4" name="job-type" name="category" onChange={this.handleInput}/> Internship
                                                    </label>
                                                </div>

                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-type-4">
                                                        <input type="radio" id="option-job-type-4" name="job-type" name="category" onChange={this.handleInput}/> Temporary
                                                    </label>
                                                </div>

                                        </div>


                                        <div className="row form-group">
                                            <div className="col-md-12"> <label className="font-weight-bold"> Mention the level of expertise you are looking for</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-category-1">
                                                        <input type="radio" id="option-job-category-1" name="job-category" name="category" onChange={this.handleInput}/> Basic
                                                    </label>
                                                </div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <label htmlFor="option-job-category-2">
                                                        <input type="radio" id="option-job-category-2" name="job-category" name="category" onChange={this.handleInput}/> Intermediate
                                                    </label>
                                                </div>

                                                <div className="col-md-12 mb-3 mb-md-0">
                                                <label htmlFor="option-job-category-3">
                                                    <input type="radio" id="option-job-category-3" name="job-category" name="category" onChange={this.handleInput}/> Expert
                                                </label >
                                                </div>

                                        </div>


                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"> <label className="font-weight-bold">Mention the budget for this job</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <input  className="form-control" placeholder="" name="budget" onChange={this.handleInput}/>
                                                </div>
                                        </div>
                                        

                                    

                                        <div className="row form-group">
                                                <div className="col-md-12">
                                                    <input type="submit" value="Post" className="btn btn-primary  py-2 px-5" onClick={this.handleSubmit} />
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