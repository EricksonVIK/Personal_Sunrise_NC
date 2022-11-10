import React from 'react'
import { useState } from 'react'
import { validateEmail } from '../../utlis/helpers'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	})
	const { name, email, message } = formState
	const [errorMessage, setErrorMessage] = useState('')

	// sync formState with user input
	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value)
			// isValid conditional statement
			if (!isValid) {
				setErrorMessage('Your email is invalid.')
			} else {
				setErrorMessage('')
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`Forgot to enter your ${e.target.name}.`)
			} else {
				setErrorMessage('')
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value })
		}
	}

	// form submission
	function handleSubmit(e) {
		e.preventDefault()
		console.log(formState)
	}

	// render jsx
	return (
		<div>
			<form id="contactForm" onSubmit={handleSubmit}>
				<legend data-testid="h1tag">Questions?</legend>
				{/* name input */}
				<div id="contactName">
					<label htmlFor="name">Name:</label>
					<TextField
						type="text"
						defaultValue={name}
						onBlur={handleChange}
						name="name"
					/>
				</div>
				{/* email input */}
				<div id="contactEmail">
					<label htmlFor="email">Email address:</label>
					<TextField
						type="email"
						defaultValue={email}
						onBlur={handleChange}
						name="email"
					/>
				</div>
				{/* message text area */}
				<div id="contactMessage">
					<label htmlFor="message">Message:</label>
					<TextField
						multiline
						name="message"
						defaultValue={message}
						onBlur={handleChange}
						rows="5"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<Button
					variant="contained"
					color="primary"
					id="contactButton"
					data-testid="button"
					type="submit"
				>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default ContactForm
