es (25 sloc)  759 Bytes

import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Calendar, Schedule, Login, Home } from './components/routes/index'

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Link to="/">Home</Link>
					<Link to="/calendar">Calendar</Link>
					<Link to="/schedule">Schedule</Link>
					<Link to="/login">Login</Link>
				</header>
			</div>
			<Routes>
				<Route path="/calendar" element={<Calendar />}></Route>
				<Route path="/schedule" element={<Schedule />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	)
}

export default App
Footer
© 2022 GitHub, Inc.