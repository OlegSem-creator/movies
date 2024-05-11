import { NavLink } from 'react-router-dom'

export default function Navbar() {
	return (
		<header>
			<nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='all-movies'>Movies</NavLink>
				<NavLink to='form'>Adding movies</NavLink>
			</nav>
		</header>
	)
}
