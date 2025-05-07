import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  FunctionField,
  ReferenceField
} from 'react-admin'

const postFilters = [
  <TextInput source='q' label="Search" alwaysOn/>,
  <ReferenceInput source='userId' label="User" reference='users'/>
]

const PostList = () => {
  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <FunctionField label="Excerpt"
          render={(record) => `${record.body.substring(0,50)}...`} />
        <ReferenceField source='userId' reference='users'/>
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
        
      </Datagrid>
    </List>
  )
}

export default PostList
