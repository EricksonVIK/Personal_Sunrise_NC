import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Auth from '../../utlis/auth'

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: 'lightblue',
		paddingRight: '79px',
		paddingLeft: '118px',
	},
	logo: {
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 600,
		color: '#FFFEFE',
		textAlign: 'left',
	},
	menuButton: {
		fontFamily: 'Open Sans, sans-serif',
		fontWeight: 700,
		size: '18px',
		marginLeft: '38px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'center',
	},
}))

//logout function
const logout = () => {
	Auth.logout()
}

const loggedInHeaders = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Calendar',
		href: '/calendar',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
]

const loggedOutHeaders = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Calendar',
		href: '/calendar',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
	{
		label: 'Sign Up',
		href: '/signup',
	},
	{
		label: 'Log In',
		href: '/login',
	},
]

export default function Header() {
	const { header, logo, menuButton } = useStyles()
	const displayDesktop = () => {
		return (
			<Toolbar className="toolbar">
				<PersonalSunriseNCLogo />
				{getMenuButtons()}
			</Toolbar>
		)
	}

	const PersonalSunriseNCLogo = () => (
		<Typography variant="h6" component="h1" className={logo}>
			Personal Sunrise NC
		</Typography>
	)

	const getMenuButtons = () => {
		return !Auth.loggedIn() ? (
			loggedOutHeaders.map(({ label, href }) => {
				return (
					<Button
						{...{
							key: label,
							color: 'inherit',
							to: href,
							component: RouterLink,
							className: menuButton,
						}}
					>
						{label}
					</Button>
				)
			})
		) : (
			<>
				<Button href="/" color="inherit">
					Home
				</Button>
				<Button href="/calendar" color="inherit">
					Calendar
				</Button>
				<Button href="/contact" color="inherit">
					Contact
				</Button>
				<Button to="/" onClick={logout} color="inherit">
					Log Out
				</Button>
			</>
		)
	}

	return <AppBar className={header}>{displayDesktop()}</AppBar>
}
