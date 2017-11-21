import React, {Component} from 'react'
import {GetArticlesDashboard} from '../../../Services'

import ListArticles from './ListArticles'
import './dashboard.css'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = ({
      totalArticlesFeatured: 0,
      totalArticles: 0,
      articleList: []
    })
  }
  componentDidMount () {
    GetArticlesDashboard()
      .then(articleData => {
        this.setState(
          articleData.data
        )
      })
      .catch(err => console.error(err))
  }
  render () {
    return (
      <div>
        <div className='labels'>
          <div className='totals users'>
            <h2 className='label-title'>Total Articles:</h2>
            <p className='label-data'>{this.state.totalArticles}</p>
          </div>
          <div className='totals admin'>
            <h2 className='label-title'>Featured Articles:</h2>
            <p className='label-data'>{this.state.totalArticlesFeatured}</p>
          </div>
        </div>
        <div id='user-list'>
          <ListArticles articleList={this.state.articleList} />
        </div>
      </div>
    )
  }
}

export default Dashboard
