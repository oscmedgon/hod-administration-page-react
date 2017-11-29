import React from 'react'
import ReactTable, {ReactTableDefaults} from 'react-table'
import 'react-table/react-table.css'

Object.assign(ReactTableDefaults, {
  defaultPageSize: 10
})

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

  return <ReactTable data={data} columns={columns} sorted={[{id: 'date_of_creation', desc: true}]} />
}

export default ListUsers
