import React, { useState } from 'react'
import Button from '@mui/material/Button'
import  TextField  from '@mui/material/TextField'
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
							error="true"
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
							error="true"
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
						>
							Log In
						</Button>
					</div>
				</fieldset>
			</form>
		</>
	)
}

export default Login
