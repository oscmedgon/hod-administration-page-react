import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => (<div className='nav-side-menu'>
  <div className='brand'>
    <img src='https://res.cloudinary.com/dm303fk5u/image/upload/v1511966508/silueta_fondo_transparente-min_yjgaol.png' height='100%' alt='Harbingers Of Devastation' />
  </div>
  <div className='menu-list'>
    <ul id='menu-content' className='menu-content out'>
      <Link to='/administration/'>
        <li className='sidebar-link'>
          <i className='fa fa-dashboard fa-lg' /> <span>Dashboard</span>
        </li>
      </Link>
      <Link to='/administration/articles'>
        <li className='sidebar-link'>
          <i className='fa fa-archive fa-lg' /> <span>Articles</span>
        </li>
      </Link>
      <ul className='sub-menu' id='products'>
        <Link to='/administration/article/new'>
          <li className='sidebar-sublink'>
            <span>New Article</span>
          </li>
        </Link>
      </ul>
      <Link to='/administration/users'>
        <li className='sidebar-link'>
          <i className='fa fa-users fa-lg' /><span>Users</span>
        </li>
      </Link>
    </ul>
  </div>
  <div className='return-main'>
    <a href='/' className='singout'>Logout <i className='fa fa-sign-out fa-lg' /></a>
  </div>
</div>)

export default Sidebar
