import React, { useEffect, useState } from 'react'
import { useInfoGetter } from '../../utils/useInfoGetter'
import { Link, useParams } from 'react-router-dom'
import Mosaic from '../../components/AlbumPresentation/Mosaic'

export default function AlbumPresentationPage() {
  
  const {id, idAlbum} = useParams()

  const userAlbumPics = useInfoGetter(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`)
  const userAlbum = useInfoGetter(`https://jsonplaceholder.typicode.com/albums/${idAlbum}`)

  return (
    <div className="page">
        <Link to={`/user/profile/${id}`}>Profil</Link>
        <p>{userAlbum.title}</p>
        <Mosaic userAlbumPics={userAlbumPics} />
    </div>
  )
}
