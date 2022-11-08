import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

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
		justifyContent: 'space-between',
	},
}))

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
	{
		label: 'Log Out',
		href: '/logout',
	},
]

const loggerOutHeaders = [
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
		label: 'Log In',
		href: '/login',
	},
]

export default function Header(props) {
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

	const headers = props.loggedIn ? loggedInHeaders : loggerOutHeaders

	const getMenuButtons = () => {
		return headers.map(({ label, href }) => {
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
	}

	return <AppBar className={header}>{displayDesktop()}</AppBar>
}
