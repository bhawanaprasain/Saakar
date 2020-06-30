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
      // name added for signup
      name:'',
      email: '',
      password: '',
      login: false,
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
         this.setState({
         login: true,
         name: this.state.name,
         email: this.state.email,
         password: this.state.password
        })
        })
     .catch(err => alert("Invalid username or password."))
    
  }

  componentDidMount(){
    if (localStorage.getItem('login') !== null) {
      const store = JSON.parse(localStorage.getItem('login'))
      this.setState({login: store.login})
    }
  }

  logout = () => {
    if (localStorage.getItem('login')){
      localStorage.removeItem('login')
    }
    this.setState({
      login: false,
      name: '',
      email: '',
      password: ''
    })
  }

  signup = (e) => {
    e.preventDefault();
        const userdata = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }


        axios({
            method: 'post',
            url: 'http://sakaar-api.herokuapp.com/user/signup',
            data: userdata
        })
         .then(response => {
          alert("You Have Successfully Signed Up.Now Login to Continue.")
          this.setState({
            login: false,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
          })
         .catch(err => alert(err))
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={(props) => (
              <Contact
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
            )}
          />
          <Route
            path="/postjob"
            exact
            render={(props) => (
              <Postjob
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
            )}
          />
          <Route
            path="/findjob"
            exact
            render={(props) => (
              <FindJobs
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
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
                handleLogout={this.logout}
              />
            )}
          />

          <Route
            path="/signup"
            exact
            render={(props) => (
              <Signup
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
                handleSignup={this.signup}
                handleInput={this.inputHandler}
              />
            )}
          />
          <Route
            path="/blog"
            exact
            render={(props) => (
              <Blog
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={(props) => (
              <About
                {...props}
                isLoggedIn={this.state.login}
                handleLogout={this.logout}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
