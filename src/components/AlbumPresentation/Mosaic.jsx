import React from 'react'
import "./Mosaic.css"
export default function Mosaic({ userAlbumPics }) {
  return (
    <div className="mosaic">
        {userAlbumPics.map((picture) => 
        <div className="img" key={picture.id}>
          <img src={picture.thumbnailUrl} alt="image"/>
        </div>)}
    </div>
  )
}
