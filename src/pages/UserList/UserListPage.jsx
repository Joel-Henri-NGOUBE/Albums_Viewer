import { useEffect, useState } from 'react'
import UserList from '../../components/UserList/UserList'
import { useInfoGetter } from '../../utils/useInfoGetter'

export default function UsersListPage() {
  
    const [usersInfo, usersTodos, usersAlbums] = useInfoGetter()

    return (
        <UserList 
        usersInfo={usersInfo}
        usersTodos={usersTodos}
        usersAlbums={usersAlbums}
      />
    )
}
