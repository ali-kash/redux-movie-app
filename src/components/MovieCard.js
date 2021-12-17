import React from 'react'

const MovieCard = (props) => {
	const { data } = props

	return (
		<div className='card'>
			<div className='card__item'>
				<div
					className='card__item-top'
					style={{ backgroundImage: `url(${data.Poster})` }}
				></div>
				<div className='card__item-bottom'>
					<div className='bottom-info'>
						<h4>{data.Title}</h4>
						<p>{data.Year}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
