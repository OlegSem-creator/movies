import { projectFirestore } from './firebase/config'
import { useState, useEffect } from 'react'

import './FairBase.css'

export default function FairBase() {
	const [data, setData] = useState([])
	const [error, setError] = useState(false)
	const [movieTitle, setMovieTitle] = useState('')
	const [movieAge, setMovieAge] = useState('')
	const [movieTime, setMovieTime] = useState('')

	useEffect(() => {
		const unsubscribe = projectFirestore.collection('movies').onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('Movie list is empty')
					setData([])
				} else {
					let result = []
					snapshot.docs.forEach((oneMovie) => {
						result.push({ id: oneMovie.id, ...oneMovie.data() })
					})
					setData(result)
					setError('')
				}
			},
			(err) => setError(err.message)
		)

		return () => unsubscribe()
	}, [])

	const deleteMovie = (id) => {
		projectFirestore.collection('movies').doc(id).delete()
	}

	const submitForm = async (e) => {
		e.preventDefault()

		const newMovie = { title: movieTitle, minage: movieAge, time: movieTime }

		try {
			await projectFirestore.collection('movies').add(newMovie)
			setMovieTitle('')
			setMovieAge('')
			setMovieTime('')
		} catch (err) {
			setError('The movie was not found' + err.message)
		}
	}

	return (
		<div className='all-movies'>
			<form className='form' onSubmit={submitForm}>
				<input
					className='input'
					type='text'
					onChange={(e) => setMovieTitle(e.target.value)}
					placeholder='Name of movie'
					value={movieTitle}
				/>
				<br />
				<input
					className='input'
					type='number'
					onChange={(e) => setMovieAge(e.target.value)}
					placeholder='Lowest age'
					min='0'
					value={movieAge}
				/>
				<br />
				<input
					className='input'
					type='number'
					onChange={(e) => setMovieTime(e.target.value)}
					placeholder='Length'
					min='0'
					value={movieTime}
				/>
				<br />

				<input type='submit' value='Add' />
			</form>

			{error && <p>{error}</p>}

			{data.map((oneMovie) => {
				const { id, title, minage, time } = oneMovie

				return (
					<div className='one-movie' key={id}>
						<p>
							{title}, {time} minutes, {minage}+
						</p>
						<button onClick={() => deleteMovie(id)}>Delete</button>
					</div>
				)
			})}
		</div>
	)
}
