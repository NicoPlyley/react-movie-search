import React from 'react'

const MovieCard = (props) => {
    return (
        <div className="card">
            <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
                alt=""
            />

            <div className="content">
                <h3 className="title">{props.movie.title}</h3>
                <p><small>Release Date: {props.movie.release_date}</small></p>
                <p><small>Rating: {props.movie.vote_average}</small></p>
                <p className="desc">{props.movie.overview}</p>
            </div>

        </div>
    )
}

export default MovieCard