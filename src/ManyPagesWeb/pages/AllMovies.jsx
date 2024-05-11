import { projectFirestore } from '../../FairBase/firebase/config'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AllMovies() {
	const [data, setData] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		const unsubscribe = projectFirestore.collection('movies').onSnapshot(
			(snapshot) => {
				// console.log(snapshot.docs)
				if (snapshot.empty) {
					setError('No movies')
				} else {
					let result = []
					snapshot.docs.forEach((oneMovie) => {
						// console.log(oneMovie.data())
						result.push({ id: oneMovie.id, ...oneMovie.data() })
					})
					setData(result)
				}
			},
			(err) => setError(err.message)
		)

		return () => unsubscribe()
	}, [])

	const deleteMovie = (id) => {
		projectFirestore.collection('movies').doc(id).delete()
	}

	return (
		<section className='all-movies'>
			{error && <p>{error}</p>}
			{data.map((oneMovie) => {
				const { id, title } = oneMovie

				return (
					<div className='one-movie' key={id}>
						<p>{title}</p>
						<Link to={`/one-movie/${id}`}>More information</Link>
						<button type='button' onClick={() => deleteMovie(id)}>
							Delete
						</button>
					</div>
				)
			})}
		</section>
	)
}
