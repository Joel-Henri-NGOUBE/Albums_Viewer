import React from 'react'
import { useParams } from 'react-router-dom'
import { useInfoGetter } from '../../utils/useInfoGetter'

export default function UserProfilePage() {
    
    const [usersInfo, usersTodos, usersAlbums] = useInfoGetter()
    
    const {id} = useParams()

    return (
        <div>{id}</div>
    )
}
