import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useInfoGetter } from '../../utils/useInfoGetter'
import Albums from '../../components/UserProfile/Albums'
import "./UserProfilePage.css"
import Before from "/before.png"

export default function UserProfilePage() {
    
    const {id} = useParams()

    const userInfo = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}`)
    const userAlbums = useInfoGetter(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    
    return (
        <div className="page">
            <div className="page-container">
                    <div>
                        <Link to="/users"><img src={Before} alt="before" style={{width: "40px"}} id="before"/></Link>
                    </div>
                    <div>
                        <p><span>Name:</span> <span>{userInfo.name}</span></p>
                        <p><span>Username:</span> <span>{userInfo.username}</span></p>
                        <p><span>Email:</span> <span>{userInfo.email}</span></p>
                    </div>
                    
                    <Albums 
                    userAlbums={userAlbums}
                    id={id}
                    />
            </div>
        </div>
    )
}
