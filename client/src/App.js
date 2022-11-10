import './App.css'
import React from 'react'
import Header from './components/routes/Header'
import Footer from './components/routes/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
	Calendar,
	Schedule,
	Login,
	Home,
	ContactForm,
	SignUp,
	OwnerCalendar,
} from './components/routes/index'

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/contact" element={<ContactForm />} />
				<Route path="/owner-calendar" element={<OwnerCalendar />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
