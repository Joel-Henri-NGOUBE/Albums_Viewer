import React, { useEffect, useState } from 'react'
import { useInfoGetter } from '../../utils/useInfoGetter'
import { Link, useParams } from 'react-router-dom'

export default function AlbumPresentationPage() {
  
  const {id, idAlbum} = useParams()

  const userAlbumsPics = useInfoGetter(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`)  

  return (
    <div>
      <Link to={`/user/profile/${id}`}>Profil</Link>
      {userAlbumsPics.map((picture) => <div style={{display: 'flex', flexFlow: 'row wrap'}}><p>{picture.albumId}</p><img src={picture.thumbnailUrl} alt="image"/></div>)}</div>
  )
}
