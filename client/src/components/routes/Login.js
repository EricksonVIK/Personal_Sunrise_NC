import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
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
