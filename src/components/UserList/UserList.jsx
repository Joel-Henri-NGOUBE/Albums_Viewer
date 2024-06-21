import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList({usersInfo, usersTodos, usersAlbums}) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    <th>Nbtodos</th>
                    <th>Nbalbums</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersInfo.map((user) => 
                    <tr index={user.id}>
                        <td><Link to={`/user/profile/${user.id}`}>{user.username}</Link></td>
                        <td>{user.email}</td>
                        <td><a href={`http://${user.website}`} target="_blank">{user.website}</a></td>
                        <td>{user.company.name}</td>
                        <td>{usersTodos.filter((todo) => todo.userId === user.id).length}</td>
                        <td>{usersAlbums.filter((album) => album.userId === user.id).length}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
