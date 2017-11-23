import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './Components/Login'
import Admin from './Components/AdminSite'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route path='/' component={Admin} />
    </Switch>
  </div>
)

export default App
