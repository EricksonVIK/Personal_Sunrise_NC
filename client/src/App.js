// es (25 sloc)  759 Bytes

import './App.css'
import React from 'react'
import Header from './components/Header';
import { Appbar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom"
import { Calendar, Schedule, Login, Home } from './components/routes/index'

function App() {
	return (
		<Router>
			<div className="App">
				<Header>				
				</Header>
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
// Footer
// © 2022 GitHub, Inc.