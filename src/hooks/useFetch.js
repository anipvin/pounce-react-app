import {useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {    
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)   // fetch data from url
                const json = await res.json()  //response is restructure into json format
                setData(json)   // store it into state data function
                setLoading(false) // to stop the loading when data is store
            } catch (error) {
                setError(error)
                setLoading(false) // to stop the loading when error is recieve
            }
        }
        fetchData()
      
    }, [url])


  return {loading, error, data}
}

export default useFetch