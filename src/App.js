import React, { useState, Fragment } from 'react'
import './App.css';
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const cloneDeep = o => JSON.parse(JSON.stringify(o))

const App = () => {
  const usersData = [
    { id: 1, name: 'william', age: 21 },
    { id: 2, name: 'mike', age: 21 },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  // 设置状态
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD
  const addUser = user => {
    user.id = user
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser(cloneDeep(user))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>编辑</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>新增</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="flex-large">
          <h2>用户列表</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
