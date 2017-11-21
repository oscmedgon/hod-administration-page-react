import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => (<div className='nav-side-menu'>
  <div className='brand'>Harbingers of Devastation</div>
  <i className='fa fa-bars fa-2x toggle-btn' data-toggle='collapse' data-target='#menu-content' />
  <div className='menu-list'>
    <ul id='menu-content' className='menu-content collapse out'>
      <Link to='/'>
        <li className='sidebar-link'>
            <i className='fa fa-dashboard fa-lg' /> Dashboard
        </li>
      </Link>
      <Link to='/articles'>
        <li className='sidebar-link'>
            <i className='fa fa-archive fa-lg' /> Articles
        </li>
      </Link>
      <ul className='sub-menu collapse' id='products'>
        <li>
          <a href='#'>Categories</a>
        </li>
        <li>
          <a href='#'>Featured Articles</a>
        </li>
        <li>
          <a href='#'>All articles</a>
        </li>
        <Link to='/article/new'>
          <li className='sidebar-sublink'>
            <span>New Article</span>
          </li>
        </Link>
      </ul>
      <Link to='/users'>
        <li className='sidebar-link'>
            <i className='fa fa-users fa-lg' /> Users
        </li>
      </Link>
      <ul className='sub-menu collapse' id='service'>
        <li>View users</li>
        <li>Manage users</li>
        <li>Users blacklist</li>
      </ul>
    </ul>
  </div>
</div>)

export default Sidebar
