import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile({userInfo, userAlbums, id}) {
  return (
    <div>
        {/* {console.log(userInfo,userAlbums)} */}
        <div>
            <Link to="/users">Users</Link>
        </div>
        <p>Nom: {userInfo.name}</p>
        <p>Pseudonyme: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <div>
            <ul>
                {/* {userAlbums} */}
                {userAlbums[0] && userAlbums.map((album) => 
                    <li>
                        <Link to={`/user/${id}/albums/${album.id}`}>
                            <div>{album.title}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}
