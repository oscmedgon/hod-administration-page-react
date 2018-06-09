import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import './Content.css';
import Dashboard from './Dashboard/';
import UserDashboard from './Dashboard/Users/';
import ArticleDashboard from './Dashboard/Articles/';
import NewArticle from './Articles/NewArticle';
import EditArticle from './Articles/EditArticle';
import {CheckToken} from '../Services/AuthServices';

class Content extends Component {
  constructor () {
    super();
    this.state = {
      loading: true,
      error: false
    };
  }

  resetStatus = () => {
    this.setState({
      loading: true,
      error: false
    })
  }

  checkToken = () => {
    if (window.sessionStorage.token) {
      CheckToken()
      .then(() => {
        this.setState(prevState => {
          prevState.loading = false;
          return prevState;
        });
      }, () => {
        this.setState(prevState => {
          prevState.loading = false;
          prevState.error = true;
          return prevState;
        });
      });
    } else {
      this.setState(prevState => {
        prevState.loading = false;
        prevState.error = true;
        return prevState;
      });
    }
  }
  componentWillReceiveProps () {
    this.checkToken()
  }
  componentDidMount () {
    this.checkToken()
  }
  render () {
    if (this.state.loading === false && this.state.error === false) {
      return (
        <div id='content'>
          <Switch>
            <Route exact path='/administration/' component={Dashboard} />
            <Route exact path='/administration/users' component={UserDashboard} />
            <Route exact path='/administration/articles' component={ArticleDashboard} />
            <Route exact path='/administration/article/new' component={NewArticle} />
            <Route exact path='/administration/article/:id' component={EditArticle} />
          </Switch>
        </div>
      );
    } else if (this.state.error === true) {
      return (
        <Redirect to='/administration/login' />
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Content);
