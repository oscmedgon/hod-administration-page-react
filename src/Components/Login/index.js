import React, {Component} from 'react'

import './login.css'
import {LoginService} from '../../Services'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      logged: false,
      username: '',
      password: ''
    }
  }
  handleSubmit = async (e) =>{
    e.preventDefault()
    const res = await LoginService(this.state)
    const {token} = res.data
    window.sessionStorage.setItem('token', token)
    this.setState(prevState => {
      prevState.logged = true
      return prevState
    })
  }
  handleChanche = e => {
    const {name, value} = e.target
    this.setState(prevState => {
      prevState[name] = value
      return prevState
    })
  }
  render () {
    if(!this.state.logged){
      return (
        <div className='login'>
          <h1>Login</h1>
          <form method='post' onSubmit={this.handleSubmit}>
            <input type='text' name='username' placeholder='Username' onChange={this.handleChanche} required='required' />
            <input type='password' name='password' placeholder='Password' onChange={this.handleChanche} required='required' />
            <button type='submit' className='btn btn-primary btn-block btn-large'>Let me in.</button>
          </form>
        </div>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}
export default Login
