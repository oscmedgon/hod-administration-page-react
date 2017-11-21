import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const ListArticles = ({articleList}) => {
  const data = articleList
  console.log(articleList)
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
  }]

  return <ReactTable data={data} columns={columns} />
}

export default ListArticles
