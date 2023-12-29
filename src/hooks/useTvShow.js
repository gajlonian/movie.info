import { useQuery } from "react-query"
import { getTvShows } from "../services/TvShowService"

/**
 * 
 * @param {string} key 
 * @param {string} filter - such as popular, top_rated, on_the_air, airing_today 
 * 
 */
export const useTvShow = (key,filter) => {
    const {data, isError, isLoading} = useQuery({
        queryKey:[key, filter],
        queryFn: () => getTvShows(filter)
    })

    const posts = data?.results

    return {
        posts,
        isError,
        isLoading
    }
}