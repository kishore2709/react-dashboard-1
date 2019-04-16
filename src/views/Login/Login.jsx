import React, { Component } from 'react';
import {Router, Route, Switch, Redirect ,Link, NavLink} from 'react-router-dom';
import { createBrowserHistory } from "history";
import routes from "routes.js";
import 'Login.css';
import DashboardPage from "views/Dashboard/Dashboard.jsx";

import Admin from "layouts/Admin.jsx";

const hist = createBrowserHistory();
const switchRoutes = (
    <Switch> 
      {routes.map((prop,key) => {
          return (
            <Route path={prop.layout + prop.path} component={prop.component} key={key}/>
          );
      })}
    </Switch>
  );

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

    showLoginBox =() => {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

    showRegisterBox = () => {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  
  render() {
    return (
        <div className = 'root-container'>
          {switchRoutes}
        <div className = 'heading-container'>
          <div className = 'logo-container'>Ax</div>
          <div className = 'name-container'>Analyx</div>
        </div>

        <div className="box-controller">
            <div
              className={"controller " + (this.state.isLoginOpen? "selected-controller": "")}
              onClick={this.showLoginBox}>Login
            </div>
            <div
               className={"controller " + (this.state.isRegisterOpen? "selected-controller": "")}
               onClick={this.showRegisterBox}>Register
            </div>
          </div>

          {this.state.isLoginOpen && <LoginBox/>}
          {this.state.isRegisterOpen && <RegisterBox/>}

        </div>
    );
  }
}

class LoginBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  
  handleChange = (e)=> {
    this.setState({[e.target.name]: e.target.value});
  }

  submitLogin = ()=> {
        return(
        <NavLink
            to="admin/dashboard"
            component={DashboardPage}
        ></NavLink>
      );
}

  render(){
    const {classes}=this.props;
    console.log("what the hack");
    console.log(this.state.username);
    console.log(this.state.password);
    return(
      <div className = 'inner-container'>
      {switchRoutes}
        <div className = 'header'>
          Login
        </div>
        <div className = 'box'>
        
          <div className = 'input-group'>
            <label htmlFor='username' />
            <input 
              type='text'
              name='username'
              value={this.state.username} onChange={this.handleChange}
              className='login-input'
              placeholder='Username' />
          </div>

          <div className = 'input-group'>
            <label htmlFor='password'/>
            <input 
              type='password'
              name='password'
              value={this.state.password} onChange={this.handleChange}
              className='login-input'
              placeholder='Password' />
          </div>
            
          <button
            type='button'
            className='login-btn'
            onlClick={this.submitLogin}>Login</button>
          
        </div>
      </div>
    );
  }
}

class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email:"",
      password:"",
      confirmpassword:""
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  submitRegister = (e) => {
    console.log("you tried to register");
    return(
      <a href="www.google.com" />
    )
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              value={this.state.username} onChange={this.handleChange}
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="email"></label>
            <input 
              type="text"
              name="email"
              value={this.state.email} onChange={this.handleChange}
              className="login-input"
              placeholder="Email"/>
          </div>

          <div className="input-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              value={this.state.password} onChange={this.handleChange}
              className="login-input"
              placeholder="Password"/>
          </div>

          <div className = 'input-group'>
            <label htmlFor='password'></label>
            <input 
              type='confirmpassword'
              name='confirmpassword'
              value={this.state.confirmpassword} onChange={this.handleChange}
              className='login-input'
              placeholder='Confirm Password' />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister}>Register</button>
        </div>
      </div>
    );
  }
}

export default App;
