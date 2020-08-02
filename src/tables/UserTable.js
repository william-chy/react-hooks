import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>昵称</th>
        <th>年龄</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                编辑
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                删除
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>无用户信息，请添加</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable
