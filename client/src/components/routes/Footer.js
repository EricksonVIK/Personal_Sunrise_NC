import React from 'react'
import { Link } from '@mui/material'

export default function footer() {
	return (
		<footer>
			<Link href="/calendar" underline="hover">
				Book Here
			</Link>
			<p>or find us at</p>
			<Link
				href="https://www.airbnb.com/rooms/655279772147097701"
				underline="hover"
				rel="noreferrer"
			>
				AirBNB
			</Link>
			<Link
				href="https://www.vrbo.com/2879508"
				underline="hover"
				rel="noreferrer"
			>
				VRBO
			</Link>
			<Link
				href="mailto:email@example.com?subject=Personal Sunrise Inquiry"
				underline="hover"
				rel="noreferrer"
			>
				email@example.com
			</Link>
		</footer>
	)
}
