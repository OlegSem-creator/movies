import { Link } from 'react-router-dom'

export default function Error() {
	return (
		<div>
			<h2>404</h2>
			<p>The page was not found</p>
			<p>
				<Link to='/'>Home</Link>
			</p>
		</div>
	)
}
