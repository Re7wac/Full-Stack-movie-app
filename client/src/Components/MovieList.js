import React from 'react'
import { Link } from "react-router-dom"

export default function MovieList(props) {
    let output = null;

    let list = props.movies;
    if (list.length > 0) {
        output = list.map(movie => {
            return <div key={movie.imdbID}>
                {/* /single-movie/tteee */}
                <Link to={`/single-movie/${movie.imdbID}`}> <h2>{movie.Title}</h2></Link>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        })
    }
    return (
        <div>
            {output}
        </div>
    )
}