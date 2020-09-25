import {useState, useEffect} from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({})
    const [error, setError] = useState(null)

    const onChange = ({coords}) => {
        setPosition({
            latitude: (coords.latitude).toFixed(6),
            longitude: (coords.longitude).toFixed(6)
        })
    }

    const onError = (error) => {
        setError(error.message)
    }

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not available.')
            return null;
        }

        const watcher = geo.watchPosition(onChange, onError)

        return () => geo.clearWatch(watcher)
    }, [])
    console.log(position)
    return {...position, error}
}