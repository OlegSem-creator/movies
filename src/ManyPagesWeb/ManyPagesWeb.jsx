import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import AllMovies from './pages/AllMovies'
import OneMovie from './pages/OneMovie'
import Form from './pages/Form'

import './ManyPagesWeb.css'

export default function ManyPagesWeb() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='all-movies' element={<AllMovies />} />
					<Route path='form' element={<Form />} />
					<Route path='one-movie/:movieId' element={<OneMovie />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
