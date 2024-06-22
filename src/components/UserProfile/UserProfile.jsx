import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile({userInfo, userAlbums, id}) {
  return (
    <div>
        {/* {console.log(userInfo,userAlbums)} */}
        <p>Nom: {userInfo.name}</p>
        <p>Pseudonyme: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <div>
            <ul>
                {/* {userAlbums} */}
                {userAlbums[0] && userAlbums.map((album) => 
                    <li>
                        <Link to={`/user/albums/${album.id}`}>
                            <div>{album.title}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
        <div>
            <Link to="/users"></Link>
        </div>
    </div>
  )
}
