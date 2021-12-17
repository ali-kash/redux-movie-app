import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import movieApi from '../common/apis/movieApi'
import { APIKey } from '../common/apis/MovieApiKey'
import { addMovies } from '../features/movies/movieSlice'

import MovieListing from './MovieListing'

const Home = () => {
	const movieText = 'Harry'
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await movieApi
				.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
				.catch((err) => {
					console.log('Err : ', err)
				})
			dispatch(addMovies(response.data))
		}
		fetchMovies()
	}, [])

	return (
		<>
			<div className='banner'></div>
			<MovieListing />
		</>
	)
}

export default Home
