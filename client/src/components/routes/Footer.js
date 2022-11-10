import React from 'react'
import { Link } from '@mui/material'
import email from "../../assets/images/email-icon.png";


export default function footer() {
	return (
		<footer>
			<Link href="/calendar" underline="hover">
				Request Here
			</Link>
			<p>or find us at</p>
			<Link
				href="https://www.airbnb.com/rooms/655279772147097701"
				underline="hover"
				rel="noreferrer"
				target = "_blank"
			>
				AirBNB
			</Link>
			<Link
				href="https://www.vrbo.com/2879508"
				underline="hover"
				rel="noreferrer"
				target="_blank"
			>
				VRBO
			</Link>
			<Link
				href="mailto:chris@personalsunrisenc.com?subject=Personal Sunrise Inquiry"
				underline="hover"
				rel="noreferrer"           				
			>
			<img className="footer-icon" src={`${email}`} alt="email icon"></img>
			</Link>
		</footer>
	)
}
