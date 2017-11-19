import React from 'react'
import './Sidebar.css'

const Sidebar = () => (<div className='nav-side-menu'>
  <div className='brand'>Brand Logo</div>
  <i className='fa fa-bars fa-2x toggle-btn' data-toggle='collapse' data-target='#menu-content'></i>
  <div className='menu-list'>
    <ul id='menu-content' className='menu-content collapse out'>
      <li>
        <a href='#'>
          <i className='fa fa-dashboard fa-lg'></i>
          Dashboard
        </a>
      </li>
      <li data-toggle='collapse' data-target='#products' className='collapsed active'>
        <a href='#'>
          <i className='glyphicon glyphicon-book'></i>
          Articles
          <span className='arrow'></span>
        </a>
      </li>
      <ul className='sub-menu collapse' id='products'>
        <li className='active'>
          <a href='#'>Categories</a>
        </li>
        <li>
          <a href='#'>Featured Articles</a>
        </li>
        <li>
          <a href='#'>All articles</a>
        </li>
        <li>
          <a href='#'>New Article</a>
        </li>
      </ul>
      <li data-toggle='collapse' data-target='#service' className='collapsed'>
        <a href='#'>
          <i className='fa fa-globe fa-lg'></i>
          Services
          <span className='arrow'></span>
        </a>
      </li>
      <ul className='sub-menu collapse' id='service'>
        <li>New Service 1</li>
        <li>New Service 2</li>
        <li>New Service 3</li>
      </ul>
      <li>
        <a href='#'>
          <i className='fa fa-users fa-lg'></i>
          Users
        </a>
      </li>
    </ul>
  </div>
</div>)

export default Sidebar
