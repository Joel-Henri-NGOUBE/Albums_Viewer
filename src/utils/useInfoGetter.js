import { useState, useEffect } from "react"

export function useInfoGetter(url = "https://jsonplaceholder.typicode.com/users"){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
    }, [])

    return data
}

export function useMediaGetter(id){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((res) => res.json())
        .then((res) => {
            const queryString = res.reduce((acc, cur) => {
                return `${acc}&albumId=${cur.id}`
            }, "")
            fetch(`https://jsonplaceholder.typicode.com/photos?${queryString}`)
            .then((res) => res.json())
            .then((res) => {setData(res);console.log(res)})
        })
    }, [])
// (data2) => fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${data2.id}`)
    return data
}