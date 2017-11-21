import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const ListUsers = ({userList}) => {
  const data = userList

  const columns = [{
    Header: 'Username',
    accessor: 'username'
  }, {
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Date of register',
    accessor: 'date_of_creation'
  }, {
    Header: 'email',
    accessor: 'email'
  }]

  return <ReactTable data={data} columns={columns} />
}

export default ListUsers
