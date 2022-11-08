import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utlis/queries'
import Auth from '../../utlis/auth'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleEmailChange = (event) => {
		let val = event.target.value
		val === '' ? (event.target.error = 'false') : (event.target.error = 'true')
		setEmail(val)
	}
	const handlePasswordChange = (event) => {
		let val = event.target.value
		val === '' ? (event.target.error = 'false') : (event.target.error = 'true')
		setPassword(val)
	}

	const [login, { error }] = useMutation(LOGIN_USER)

	//login
	const handleFormSubmit = async (e) => {
		e.preventDefault()
		try {
			const { data } = await login({
				variables: { email: email, password: password },
			})

			Auth.login(data.login.token)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<form id="loginForm">
				<fieldset id="mainFieldset">
					<legend>Log In</legend>
					<div id="loginEmail">
						<label htmlFor="email">Email:</label>
						<TextField
							type="email"
							name="email"
							id="inputEmail"
							placeholder="example@email.com"
							value={email}
							required={true}
							variant="outlined"
							error={email.length < 1}
							onChange={handleEmailChange}
						></TextField>
					</div>
					<div id="loginPassword">
						<label htmlFor="password">Password:</label>
						<TextField
							type="password"
							name="password"
							id="inputPassword"
							value={password}
							required={true}
							variant="outlined"
							error={password.length < 1}
							onChange={handlePasswordChange}
						></TextField>
					</div>
					<div id="loginSubmit">
						<Button
							id="login"
							type="submit"
							formAction="/#"
							variant="contained"
							color="primary"
							onClick={handleFormSubmit}
						>
							Log In
						</Button>
					</div>
				</fieldset>
			</form>
			{error && 'Error logging in.'}
		</>
	)
}

export default Login
