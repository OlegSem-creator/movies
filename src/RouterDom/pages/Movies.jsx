import movies from '../data'
import { Link } from 'react-router-dom'

export default function Movies() {
	return (
		<section>
			<h1>Movies</h1>
			<div className='all-movies'>
				{movies.map((oneMovie) => {
					return (
						<article className='one-movie' key={oneMovie.id}>
							<h2>{oneMovie.title}</h2>
							<img src={oneMovie.image} alt='img' />
							<br />
							<Link to={`/all-movies/${oneMovie.id}`}>More info</Link>
						</article>
					)
				})}
			</div>
		</section>
	)
}
