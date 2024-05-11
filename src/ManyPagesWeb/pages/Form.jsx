import { useState } from 'react'
import { projectFirestore } from '../../FairBase/firebase/config'

export default function Form() {
	const [movieTitle, setMovieTitle] = useState('')
	const [movieAge, setMovieAge] = useState('')
	const [movieTime, setMovieTime] = useState('')

	const submitForm = async (e) => {
		e.preventDefault()
		//  console.log(movieTitle, movieAge, movieTime)

		const newMovie = {
			title: movieTitle,
			minage: parseInt(movieAge),
			time: parseInt(movieTime),
		}

		try {
			await projectFirestore.collection('movies').add(newMovie)
			setMovieTitle('')
			setMovieAge('')
			setMovieTime('')
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
		<section className='form-section'>
			<form onSubmit={submitForm}>
				<input
					type='text'
					placeholder='Movie name'
					onChange={(e) => setMovieTitle(e.target.value)}
					value={movieTitle}
				/>
				<input
					type='number'
					placeholder='Minimal age'
					min='1'
					onChange={(e) => setMovieAge(e.target.value)}
					value={movieAge}
				/>
				<input
					type='number'
					placeholder='Time of movie'
					min='1'
					onChange={(e) => setMovieTime(e.target.value)}
					value={movieTime}
				/>
				<input type='submit' value='Add Movie' />
			</form>
		</section>
	)
}
