import React, {Component} from 'react'
import {GetDashboard} from '../../Services'

import './dashboard.css'

class Dashboard extends Component{
  constructor () {
    super()
    this.state = {
      userDashboard: [],
      articleDashboard: []
    }
  }
  componentWillMount = async () => {
    const data = await GetDashboard()
    console.log(data)
    this.setState({
      userDashboard: data.data[0],
      articleDashboard: data.data[1]
    })
  }
  render () {
    return (
      <div className='general-dashboard'>
        <div className='users-section dashboard-section'>
          <h3>
            <i className='fa fa-users fa-lg'></i> Users
          </h3>
          <div className='dashboard-content' >
            {
              this.state.userDashboard.map(element => {
                return (<p>{element.title}: <strong>{element.body}</strong> </p>)
              })
            }
          </div>
        </div>
        <div className='article-section dashboard-section'>
          <h3>
            <i className='fa fa-archive fa-lg'></i> Articles
          </h3>
          <div className='dashboard-content' >
            {
              this.state.articleDashboard.map(element => {
                return (<p>{element.title}: <strong>{element.body}</strong> </p>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
