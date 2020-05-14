import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Postjob from "./components/Postjob"
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Jobcategories from './components/Jobcategories';
import Home from "./components/Home"


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/footer" exact component={Footer}></Route>
        <Route path="/header" exact component={Header}></Route>
        <Route path="/subscription" exact component={Subscription}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/postjob" exact component={Postjob}></Route>
        <Route path="/categories" exact component={Jobcategories}></Route>








      </Router>
      
      
    </div>
  );
}

export default App;
