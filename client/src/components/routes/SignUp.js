import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../../utlis/queries'
import Auth from '../../utlis/auth'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [username, setUsername] = useState('')
	const [valid, setValid] = useState(true)

	const [addUser, { error }] = useMutation(ADD_USER)

	// validation for password entry before submission
	const validatePassword = (password, passwordConfirm) => {
		if (password.length >= 1 && password === passwordConfirm) {
			return setValid(false)
		}
		return setValid(true)
	}

	useEffect(() => {
		validatePassword(password, passwordConfirm)
	})

	// set states for updating values
	const handleUserameChange = (event) => {
		setUsername(event.target.value)
	}
	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}
	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}
	const handlePasswordConfirmChange = (event) => {
		setPasswordConfirm(event.target.value)
	}

	// handle form submission and authentication
	const handleFormSubmit = async (event) => {
		event.preventDefault()
		try {
			const { data } = await addUser({
				variables: { email: email, password: password, username: username },
			})
			Auth.login(data.addUser.token)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<form id="signupForm">
				<fieldset id="mainFieldset">
					<legend>Sign Up</legend>
					<div id="signupUsername">
						<label htmlFor="username">Username:</label>
						<TextField
							type="text"
							id="username"
							placeholder="Userame"
							value={username}
							required={true}
							variant="outlined"
							error={username.length <= 0}
							helperText={username.length <= 0 ? 'Required' : null}
							onChange={handleUserameChange}
						></TextField>
					</div>
					<div id="signupEmail">
						<label htmlFor="email">Email:</label>
						<TextField
							type="email"
							name="email"
							id="inputEmail"
							placeholder="example@email.com"
							value={email}
							required={true}
							variant="outlined"
							onChange={handleEmailChange}
							error={email.length <= 0}
						></TextField>
					</div>
					<div id="signupPassword">
						<label htmlFor="password">Password:</label>
						<TextField
							type="password"
							name="password"
							id="inputPassword"
							value={password}
							required={true}
							variant="outlined"
							onChange={handlePasswordChange}
							error={password.length <= 0}
						></TextField>
					</div>
					<div id="signupPasswordConfirm">
						<label htmlFor="passwordComfirm">Confirm Password:</label>
						<TextField
							type="password"
							name="passwordConfirm"
							id="inputPasswordConfirm"
							value={passwordConfirm}
							required={true}
							variant="outlined"
							onChange={handlePasswordConfirmChange}
							error={passwordConfirm.length <= 0}
						></TextField>
					</div>
					<div id="signupSubmit">
						<Button
							id="signup"
							type="submit"
							onClick={handleFormSubmit}
							variant="contained"
							color="primary"
							disabled={valid}
						>
							Log In
						</Button>
					</div>
				</fieldset>
			</form>
			{error && <div>Sign Up failed.</div>}
		</>
	)
}

export default SignUp
