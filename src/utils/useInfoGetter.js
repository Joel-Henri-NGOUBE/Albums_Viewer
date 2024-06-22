import { useState, useEffect } from "react"

export function useInfoGetter(url = "https://jsonplaceholder.typicode.com/users"){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
        // console.log(res)
        setData(res)
        })
    }, [])

    return data
}