import './App.css'
import React from 'react'
import Header from './components/routes/Header'
import Footer from './components/routes/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Calendar, Schedule, Login, Home, ContactForm } from './components/routes/index'

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/calendar" element={<Calendar />}></Route>
				<Route path="/schedule" element={<Schedule />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<ContactForm />}></Route>
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
// Footer
