import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './Content.css'
import Dashboard from './Dashboard/'
import UserDashboard from './Dashboard/Users/'
import ArticleDashboard from './Dashboard/Articles/'
import NewArticle from './Articles/NewArticle'
import EditArticle from './Articles/EditArticle'
import {CheckToken} from '../Services/AuthServices'

const Content = () => {
  if (CheckToken()) {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/administration/' component={Dashboard} />
          <Route exact path='/administration/users' component={UserDashboard} />
          <Route exact path='/administration/articles' component={ArticleDashboard} />
          <Route exact path='/administration/article/new' component={NewArticle} />
          <Route exact path='/administration/article/:id' component={EditArticle} />
        </Switch>
      </div>
    )
  } else {
    return (
      <Redirect to='/administration/login' />
    )
  }
}

export default Content
