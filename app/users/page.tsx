import React from 'react'


interface Users {
    id: string
    name: string
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: Users[] = await res.json()
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li> )}
      </ul>
    </div>
  )
}

export default UsersPage
