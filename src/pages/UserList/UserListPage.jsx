import { useEffect, useState } from 'react'
import UserList from '../../components/UserList/UserList'
import { useInfoGetter } from '../../utils/useInfoGetter'

export default function UsersListPage() {
  
    const usersInfo= useInfoGetter()
    const usersTodos= useInfoGetter("https://jsonplaceholder.typicode.com/todos")
    const usersAlbums= useInfoGetter("https://jsonplaceholder.typicode.com/albums")

    return (
        <UserList 
        usersInfo={usersInfo}
        usersTodos={usersTodos}
        usersAlbums={usersAlbums}
      />
    )
}
