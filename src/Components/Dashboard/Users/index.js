import React, {Component} from 'react'
import {GetUserDashboard} from '../../../Services'

import ListUsers from './ListUsers'
import './dashboard.css'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = ({
      recentUsers: 0,
      totalAdmins: 0,
      totalUsers: 0,
      userList: []
    })
  }
  componentDidMount () {
    GetUserDashboard()
      .then(userData => {
        this.setState(
          userData.data
        )
      })
      .catch(err => console.error(err))
  }
  render () {
    return (
      <div>
        <div className='labels'>
          <div className='totals users'>
            <h2 className='label-title'>Total Users:</h2>
            <p className='label-data'>{this.state.totalUsers}</p>
          </div>
          <div className='totals admin'>
            <h2 className='label-title'>Admin Users:</h2>
            <p className='label-data'>{this.state.totalAdmins}</p>
          </div>
          <div className='totals users'>
            <h2 className='label-title'>Registered users last week:</h2>
            <p className='label-data'>{this.state.recentUsers}</p>
          </div>
        </div>
        <div id='user-list'>
          <ListUsers userList={this.state.userList} />
        </div>
      </div>
    )
  }
}

export default Dashboard
