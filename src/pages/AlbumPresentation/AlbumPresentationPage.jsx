import React, { useEffect, useState } from 'react'
import { useMediaGetter } from '../../utils/useInfoGetter'
import { useParams } from 'react-router-dom'

export default function AlbumPresentationPage() {
  
  const {id} = useParams()

  const userAlbumsPics = useMediaGetter(id)  

  return (
    <div>{userAlbumsPics.map((picture) => <div style={{display: 'flex', flexFlow: 'row wrap'}}><p>{picture.albumId}</p><img src={picture.thumbnailUrl} alt="image"/></div>)}</div>
  )
}
