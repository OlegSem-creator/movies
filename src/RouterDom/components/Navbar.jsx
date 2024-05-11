import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
	return (
		<header>
			<nav>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'activeLink link' : 'nonactiveLink link'
					}
				>
					Home
				</NavLink>
				<br />
				<NavLink
					to='/movies'
					className={({ isActive }) =>
						isActive ? 'activeLink link' : 'nonactiveLink link'
					}
				>
					Movies
				</NavLink>
				<br />
				<NavLink
					to='/serials'
					className={({ isActive }) =>
						isActive ? 'activeLink link' : 'nonactiveLink link'
					}
				>
					Serials
				</NavLink>
			</nav>
		</header>
	)
}
