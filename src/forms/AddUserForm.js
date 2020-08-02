import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', age: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.age) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>昵称</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>年龄</label>
      <input type="text" name="age" value={user.age} onChange={handleInputChange} />
      <button>添加</button>
    </form>
  )
}

export default AddUserForm
