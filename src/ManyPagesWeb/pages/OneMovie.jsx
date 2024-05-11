import { Link, useParams } from 'react-router-dom'
import { projectFirestore } from '../../FairBase/firebase/config'
import { useState, useEffect } from 'react'

export default function OneMovie() {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)

	const { movieId } = useParams()

	useEffect(() => {
		projectFirestore
			.collection('movies')
			.doc(movieId)
			.get()
			.then((document) => {
				//   console.log(document)
				if (document.exists) {
					setData(document.data())
				} else {
					setError('The movie was not found')
				}
			})
			.catch((err) => setError(err.message))
	}, [movieId])

	return (
		<section className='one-movie-section'>
			{error && <p>{error}</p>}
			<h1>{data.title}</h1>
			<p>{data.minage}</p>
			<p>{data.time}</p>
			<Link exact='true' to='/all-movies'>
				Back to all movies
			</Link>
		</section>
	)
}
