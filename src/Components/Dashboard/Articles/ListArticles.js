import React from 'react'
import {Link} from 'react-router-dom'
import ReactTable, {ReactTableDefaults} from 'react-table'
import PropTypes from 'prop-types'

import 'react-table/react-table.css'
import './table.css'

Object.assign(ReactTableDefaults, {
  defaultPageSize: 10
})

const ListArticles = ({articleList}) => {
  const data = articleList
  const columns = [{
    Header: 'Title',
    accessor: 'title'
  }, {
    Header: 'Category',
    accessor: 'category'
  }, {
    Header: 'Author',
    accessor: 'author.name'
  }, {
    Header: 'Date of Publish',
    accessor: 'date_pretty'
  },
  {
    Header: 'Edit',
    acessor: 'icon',
    Cell: props => (
      <span>
        <Link to={`/administration/article/${props.original._id}`} className='table.icon-edit'>
          <i className='table-icon table-icon-edit fa fa-pencil-square-o fa-lg' aria-hidden='true' />
        </Link>
        {/* <Link to={`/administration/article/${props.original._id}/remove`} className='table.icon-edit'>
          <i id='' className='table-icon table-icon-remove fa fa-times' aria-hidden='true'></i>
        </Link> */}
      </span>)
  }
  ]

  return <ReactTable data={data} columns={columns} sorted={[{id: 'date_pretty', desc: true}]} />
}
// Check if articleList is not an array
ListArticles.propTypes = {
  articleList: PropTypes.array.isRequired
}

export default ListArticles
