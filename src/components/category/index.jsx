import React, { useEffect } from "react";
import MovieService from "../../services/MovieService";
import { useMovies } from "../../hooks/useMovies";
import { useInfiniteQuery } from "react-query";


export default function Category() {
    
    return (
        <div>
            <header>
                <h1>Popular</h1>
            </header>
            <ul>
                
            </ul>
        </div>
    );
}
