import React, {useState} from 'react'
import './sass/search_movies.scss'

const SearchMovies = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }

    const handleSearch = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b62146552c38f87f9b092bf28296f87f&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSearch}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for a movie"
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                { movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt=""
                        />

                        <div className="content">
                            <h3 className="title">{movie.title}</h3>
                            <p><small>Release Date: {movie.release_date}</small></p>
                            <p><small>Rating: {movie.vote_average}</small></p>
                            <p className="desc">{movie.overview}</p>
                        </div>

                    </div>
                )) }
            </div>
        </div>
    )
}

export default SearchMovies