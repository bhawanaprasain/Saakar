import React, { Component } from "react"
import axios from "axios"
import Login from './Login'

class JobForm extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            description:"",
            categories:"",
            budget:"",
            userId:"",
            time:"",
            login: false,
            store: ""
          
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

       handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
    
        })
        }
    handleSubmit(e){
        e.preventDefault();
        
        const jobdata ={
            title: this.state.title,
            categories:this.state.categories,
            description:this.state.description,
            budget:this.state.budget,
            userId: this.state.userId,
            time: this.state.time
        }
        
        axios({
            method: "post",
            url: "http://sakaar-api.herokuapp.com/job/create",
            data: jobdata

        }).then((response)=>{
            alert(response.data);
            
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
                                                <label className="font-weight-bold" htmlFor="fullname">Title</label>
                                                <input type="text" id="fullname" className="form-control" placeholder="eg. Graphics designer, Web Designinng"  name="title" onChange={this.handleInput} /><br/>
                                            </div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <label className="font-weight-bold" htmlFor="fullname">Job  Category</label>
                                                <input type="text" id="fullname" className="form-control" placeholder="eg. Maya, After Effect, Python, Django"  name="categories" onChange={this.handleInput} /><br/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold">Describe the details of service you are looking for. Mention all minute details.</label>
                                            </div>
                                            <div className="col-md-12 mb-3 mb-md-0">
                                                <textarea className="form-control" id="" cols="50" rows="7" name="description" onChange={this.handleInput}></textarea><br/>
                                            </div>
                                        </div>
                                        {/* <div className="row form-group">
                                            <div className="col-md-12">
                                                <label className="font-weight-bold">If you have any sample file please attach file.</label><br/>
                                                <input type="submit" value="Attach file" className="btn btn-primary  py-2 px-5" /><br/><br/>
                                            </div>
                                        </div> */}
                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"> <label className="font-weight-bold">Mention the budget for this job</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <input type="text" className="form-control" placeholder="" name="budget" onChange={this.handleInput}/>
                                                </div>
                                        </div>
                                        
                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"> <label className="font-weight-bold">Mention delivery time for this order</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <input  className="form-control" placeholder="" name="time" onChange={this.handleInput}/>
                                                </div>
                                        </div>
                                        <div className="row form-group mb-4">
                                            <div className="col-md-12"> <label className="font-weight-bold">UserId</label></div>
                                                <div className="col-md-12 mb-3 mb-md-0">
                                                    <input type="text" className="form-control" placeholder="" name="userId" onChange={this.handleInput}/>
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