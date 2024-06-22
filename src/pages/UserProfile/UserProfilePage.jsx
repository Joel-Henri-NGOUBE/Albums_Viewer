import React from 'react'
import { useParams } from 'react-router-dom'
import { useInfoGetter } from '../../utils/useInfoGetter'
import UserProfile from '../../components/UserProfile/UserProfile'

export default function UserProfilePage() {
    
    const {id} = useParams()

    const userInfo = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userAlbums = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    // const userAlbums = useInfoGetter("https://jsonplaceholder.typicode.com/users")
    

    return (
        <>
        <UserProfile 
        userInfo={userInfo}
        userAlbums={userAlbums}
        id={id}
        />
        </>
    )
}
