import React, {useState} from 'react'
import './sass/search_movies.scss'
import MovieCard from "./MovieCard";

const SearchMovies = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
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
                    <MovieCard key={movie.id} movie={movie} />
                )) }
            </div>
        </div>
    )
}

export default SearchMovies