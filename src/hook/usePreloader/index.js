import {useEffect, useLayoutEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const usePreloaderPath = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2200)
    }, [location])


    return {isLoading}
}
export default usePreloaderPath