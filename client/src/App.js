import React from 'react'
import { Admin, Layout, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import homePage from './pages/homePage';
import authProvider from './pages/authProvider';

function App() {
  return (
    <Admin layout={Layout} 
    dataProvider={simpleRestProvider('http://localhost:5000')} 
    dashboard={homePage} 
    authProvider={authProvider}
    >
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App
