import React from 'react'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import './table.css'

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
                        <i className='table-icon table-icon-edit fa fa-pencil-square-o' aria-hidden='true'></i>
                      </Link>
                      {/* <Link to={`/administration/article/${props.original._id}/remove`} className='table.icon-edit'>
                        <i id='' className='table-icon table-icon-remove fa fa-times' aria-hidden='true'></i>
                      </Link> */}
                    </span>)
  }
  ]

  return <ReactTable data={data} columns={columns} />
}

export default ListArticles
