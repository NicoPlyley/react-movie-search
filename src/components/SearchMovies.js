import React, {useState} from 'react'
import './sass/search_movies.scss'

const SearchMovies = () => {

    const [query, setQuery] = useState('')

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
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
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
    )
}

export default SearchMovies