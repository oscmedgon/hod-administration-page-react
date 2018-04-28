import React, {Component} from 'react'
import toastr from 'toastr'

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
    try {
      const res = await LoginService(this.state)
      const {token} = res.data
      window.sessionStorage.setItem('token', token)
      toastr.success('Login success!!')
      this.setState(prevState => {
        prevState.logged = true
        return prevState
      })
    }
    catch(e) {
      toastr.error('Username or password incorrect or not autorized to access!!')
    }
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
            <input type='email' name='email' placeholder='Email' onChange={this.handleChanche} required />
            <input type='password' name='password' placeholder='Password' onChange={this.handleChanche} required />
            <button type='submit' className='btn btn-primary btn-block btn-large'>Login as administrator.</button>
          </form>
        </div>
      )
    } else {
      return (<Redirect to='/administration/' />)
    }
  }
}
export default Login
