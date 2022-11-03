import './App.css'
import React from 'react'
import header from './components/header';
import footer from './components/footer'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Calendar, Schedule, Login, Home } from './components/routes/index'

function App() {
	return (
		<Router>
			<div className="App">
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
