import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = () => {
    const [data, setData] = useState(null);
    const [method, setMethod] = useState();
    const [config, setConfig] = useState();
    const [url, setUrl] = useState();

    const baseUrl = 'https://api.themoviedb.org/3/'

    const httpConfig = (url, method, data) => {
        if (method === "GET") {
            setConfig({
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTJmZDg4ODcxMzZhYjkwOWNhZDA4ZTdmMzJhMTkyYyIsInN1YiI6IjY1ODZlZjQxNGRhM2Q0NjNhMTQxOWJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7N3sEIj8oSPvEUxN1xYbwVRrQLRkcbQHHXYtCkB6k4g'
                }
            })
        }

        setUrl(url);
        setMethod(method);
    };

    useEffect(() => {
        if (method == "GET") {
            fetch(baseUrl + url, config)
                .then(response => {
                    if (response.ok) {
                        console.log("Sucesso ao obter dados")
                        return response.json()
                    }
                    else
                        console.log("Falha ao obter dados")
                })
                .then(result => {
                    setData(result) 
                })
        }
    }, [method])

    return { data, httpConfig};

};