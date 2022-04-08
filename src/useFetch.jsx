import { useEffect, useState } from "react";


    const useFetch = (url) => {
        const [res, setPosts] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // const abortController = new AbortController()
      setTimeout(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not load data')
            }
            return res.json()
        })
        .then(data => {
            setPosts(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            // if (err.name === 'AbortError') {
            //     console.log('fetch aborted')
            // } else {
                setError(err.message)
                setIsPending(false)
            // }
        })
      }, 1000);

    //   return () => abortController.abort()
    }, [url])
    return { res, isPending, error }
}

export default useFetch