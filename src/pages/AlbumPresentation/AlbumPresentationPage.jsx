import React, { useEffect, useState } from 'react'
import { useInfoGetter } from '../../utils/useInfoGetter'
import { Link, useParams } from 'react-router-dom'
import Mosaic from '../../components/AlbumPresentation/Mosaic'
import Before from "/before.png"
import "./AlbumPresentationPage.css"

export default function AlbumPresentationPage() {
  
  const {id, idAlbum} = useParams()

  const userAlbumPics = useInfoGetter(`https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`)
  const userAlbum = useInfoGetter(`https://jsonplaceholder.typicode.com/albums/${idAlbum}`)

  return (
    <div className="page">
      <div className="page-container">
          <Link to={`/user/profile/${id}`}><img src={Before} alt="before" style={{width: "40px"}} id="before"/></Link>
          <p id="albumTitle">{userAlbum.title}</p>
          <Mosaic userAlbumPics={userAlbumPics} />
      </div>
    </div>
  )
}
