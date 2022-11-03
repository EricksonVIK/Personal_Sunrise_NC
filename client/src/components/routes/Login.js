import React from 'react'

const Login = () => {
	return (
		<>
			<form>
				<div id="loginEmail">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="inputEmail"
						placeholder="example@email.com"
						value=""
						required={true}
					></input>
				</div>
				<div id="loginPassword">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="inputPassword"
						value=""
						required={true}
					></input>
				</div>
				<div id="loginSubmit">
					<button id="login" type="submit" formAction="/#">
						Log In
					</button>
				</div>
			</form>
		</>
	)
}

export default Login
