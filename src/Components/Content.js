import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './Content.css'

import Dashboard from './Dashboard/'
import UserDashboard from './Dashboard/Users/'
import ArticleDashboard from './Dashboard/Articles/'
import NewArticle from './Articles/NewArticle'

const Content = () => (
  <div className='content'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/users' component={UserDashboard} />
      <Route exact path='/articles' component={ArticleDashboard} />
      <Route exact path='/article/new' component={NewArticle} />
    </Switch>
  </div>
)

export default Content
