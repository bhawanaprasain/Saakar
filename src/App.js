import React , {setState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Postjob from "./components/Postjob"
import Contact from './components/Contact';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import FindJobs from "./components/FindJobs"
import Blog from "./components/Blog"
import About from "./components/About"



function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/postjob" exact component={Postjob}></Route>
        <Route path="/findjob" exact component={FindJobs}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/about" exact component={About}></Route>












      </Router>
      
      
    </div>
  );
}

export default App;
