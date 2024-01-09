import { useEffect, useState } from "react"

export const useTrendingFilter = (keyStorage) => {
    const initValue = () => {
        const savedFilter = sessionStorage.getItem(keyStorage)
        return savedFilter || 'day'
    }
    const [filter, setFilter] = useState(initValue())

    useEffect(() => {
        sessionStorage.setItem(keyStorage, filter)
    },[filter])

    return {
        filter,
        setFilter
    }

}