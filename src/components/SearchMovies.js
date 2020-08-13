import React from 'react'
import './sass/search_movies.scss'

const SearchMovies = () => {

    const handleSearch = async (e) => {
        e.preventDefault()

        const query = 'Jurassic Park'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b62146552c38f87f9b092bf28296f87f&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form className="form" onSubmit={handleSearch}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Search for a movie" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies