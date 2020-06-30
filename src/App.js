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
import axios from "axios"




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      login: false,
      store: null
  }
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  login = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    axios({
        method: 'post',
        url: 'https://sakaar-api.herokuapp.com/user/signin',
        data: userData
    })
     .then(response => {             
         localStorage.setItem('login',JSON.stringify({
            login: true,
            token: response.data
         }))
         this.setState({login: true})
        })
     .catch(err => console.log(err, "Checkout this errror"))
    
  }

  componentDidMount(){
    if (localStorage.getItem('login') !== null) {
      const store = JSON.parse(localStorage.getItem('login'))
      this.setState({login: store.login})
    }
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} isLoggedIn={this.state.login} />
            )}
          />
          <Route path="/contact" exact 
          render={props =>(
            <Contact {...props} isLoggedIn={this.state.login}/>
          )}
          />
          <Route
            path="/postjob"
            exact
            render={(props) => <Postjob isLoggedIn={this.state.login} />}
          />
          <Route path="/findjob" exact
          render={props =>(
            <FindJobs {...props} isLoggedIn={this.state.login} />
          )}
          />

          <Route
            path={"/login"}
            exact
            render={(props) => (
              <Login
                {...props}
                handleLogin={this.login}
                handleInput={this.inputHandler}
                isLoggedIn={this.state.login}
              />
            )}
          />

          <Route path="/signup" exact
          render={props =>(
            <Signup {...props} isLoggedIn={this.state.login} />
          )} 
          />
          <Route path="/blog" exact
          render={props => (
            <Blog {...props} isLoggedIn={this.state.login} />
          )}
          />
          <Route path="/about" exact
          render={props =>(
            <About {...props} isLoggedIn={this.state.login}/>
          )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
