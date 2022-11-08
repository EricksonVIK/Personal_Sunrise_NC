import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value)
	}
	const handleLastNameChange = (event) => {
		setLastName(event.target.value)
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

	return (
		<>
			<form id="signupForm">
				<fieldset id="mainFieldset">
					<legend>Sign Up</legend>
					<div id="signupFirstName">
						<label htmlFor="firstName">First Name:</label>
						<TextField
							type="text"
							id="firstName"
							placeholder="First Name"
							value={firstName}
							required={true}
							variant="outlined"
							error={firstName.length <= 0}
							helperText={firstName.length <= 0 ? 'Required' : null}
							onChange={handleFirstNameChange}
						></TextField>
					</div>
					<div id="signupLastName">
						<label htmlFor="lastName">Last Name:</label>
						<TextField
							type="text"
							id="lastName"
							placeholder="Last Name"
							value={lastName}
							required={true}
							variant="outlined"
							onChange={handleLastNameChange}
							error={lastName.length <= 0}
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

export default SignUp
