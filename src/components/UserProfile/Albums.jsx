import React from 'react'
import { Link } from 'react-router-dom'
import "./Albums.css"

export default function Albums({ userAlbums, id }) {
  return (
        <div className="album">
            <p>Yours albums:</p>
            <ul>
                {userAlbums[0] && userAlbums.map((album) => 
                    <li key={album.id}>
                        <Link to={`/user/${id}/albums/${album.id}`}>
                            <div>{album.title}</div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
  )
}
