import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useInfoGetter } from '../../utils/useInfoGetter'
import Albums from '../../components/UserProfile/Albums'

export default function UserProfilePage() {
    
    const {id} = useParams()

    const userInfo = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userAlbums = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    
    return (
        <>
            <div>
                <Link to="/users">Users</Link>
            </div>
            <p>Name: {userInfo.name}</p>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            
            <Albums 
            userAlbums={userAlbums}
            id={id}
        />
        
        </>
    )
}
