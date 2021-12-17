import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movies/movieSlice'

import MovieCard from '../components/MovieCard'

const MovieListing = () => {
	const movies = useSelector(getAllMovies)
	console.log(movies)
	let renderMovies = ''

	renderMovies =
		movies.Response === 'True' ? (
			movies.Search.map((movie, index) => {
				return <MovieCard key={movie.imdbID} data={movie} />
			})
		) : (
			<div className='movies-error'>
				<h3>{movies.Error}</h3>
			</div>
		)

	return (
		<div className='movieWrapper'>
			<div className='movieWrapper__list'>
				<h2>Movies</h2>
				<div className='movieWrapper__list-container'>{renderMovies}</div>
			</div>
		</div>
	)
}

export default MovieListing
