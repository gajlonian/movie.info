import { useQuery } from "react-query"
import MovieService from "../services/MovieService"

export const useCategory = (key, filter) => {
    const movie = new MovieService()
    const {data, isError, isLoading} = useQuery({
        queryFn: () => movie.getMovies(filter),
        queryKey:[key, filter]
    })
    const posts = data?.results
    return {posts, isError, isLoading}
} 