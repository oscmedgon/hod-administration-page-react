import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './Content.css'
import Dashboard from './Dashboard/'
import UserDashboard from './Dashboard/Users/'
import ArticleDashboard from './Dashboard/Articles/'
import NewArticle from './Articles/NewArticle'
import EditArticle from './Articles/EditArticle'
import {CheckToken} from '../Services'

const Content = () => {
  if (CheckToken()) {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/users' component={UserDashboard} />
          <Route exact path='/articles' component={ArticleDashboard} />
          <Route exact path='/article/new' component={NewArticle} />
          <Route exact path='/article/:id' component={EditArticle} />
        </Switch>
      </div>
    )
  } else {
    return (
      <Redirect to='/login' />
    )
  }
}

export default Content
