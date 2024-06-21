import { useState, useEffect } from "react"

export function useInfoGetter(){
    const [usersInfo, setUsersInfo] = useState([])
    const [usersTodos, setUsersTodos] = useState([])
    const [usersAlbums, setUsersAlbums] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
        // console.log(res)
        setUsersInfo(res)
        })
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((res) => {
        // console.log(res)
        setUsersTodos(res)
        })
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((res) => {
        // console.log(res)
        setUsersAlbums(res)
        })
    }, [])

    return [usersInfo, usersTodos, usersAlbums]
}