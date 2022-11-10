import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useMutation, useQuery } from '@apollo/client'
import {
	ADD_RESERVATION,
	QUERY_EVENTS,
	QUERY_RESERVATIONS,
} from '../../utlis/queries'
import Auth from '../../utlis/auth'
import { Button, Dialog, DialogTitle } from '@mui/material'

const OwnerCalendar = () => {
	const [selectInfo, setSelectInfo] = useState({ start: '', end: '', user: '' })
	const [open, setOpen] = useState(false)
	const { loading, data } = useQuery(QUERY_EVENTS)
	const { getReservations, resData } = useQuery(QUERY_RESERVATIONS)
	const [loadingRes, { reservation }] = useMutation(ADD_RESERVATION)
	const eventArr = []
	const events = data?.events || []
	const reservations = resData?.requests || []

	/* 
	
	Something wrong here but not sure why.  Gets the events AND the reservations 
	but it won't push the reservations to the eventArr.  Network request shows data from graphql but
	it won't console.log that data either.
	
	
	
	*/

	// Need this format for calendar.  end has to have that added to push it into the "last" day
	const getEvents = async () => {
		/* await events.map((data, index) => {
			console.log('events: ', data)
			eventArr.push({
				id: data._id,
				title: data.title,
				start: new Date(parseInt(data.start)),
				end: new Date(parseInt(data.end) + 90000000),
				allDay: true,
			})
		}) */
		await reservations.map((data, index) => {
			eventArr.push({
				id: data._id,
				title: data.username,
				email: data.email,
				start: new Date(parseInt(data.start)),
				end: new Date(parseInt(data.end) + 90000000),
			})
		})
	}

	getEvents()

	// FullCalendar callback for when user selects dates
	const addReservation = async () => {
		try {
			const { reservation } = await loadingRes({
				variables: {
					username: Auth.getUser().data.username,
					_id: Auth.getUser().data._id,
					email: Auth.getUser().data.email,
					start: selectInfo.start,
					end: selectInfo.end,
				},
			})
			console.log(reservation)
		} catch (err) {
			console.error(err)
		}

		setOpen(false)
	}

	const openDialog = () => {
		return Auth.loggedIn() ? (
			<div id="dialogBox">
				<DialogTitle>Confirm Dates: </DialogTitle>
				<p>{`Start: ${selectInfo.start} End: ${selectInfo.end}`}</p>
				<p>End date is morning of checkout.</p>
				<Button onClick={() => addReservation(selectInfo)}>Confirm</Button>
				<Button onClick={() => setOpen(false)}>Change</Button>
			</div>
		) : (
			<div id="dialogBox">
				<DialogTitle>Please log in to request a reservation.</DialogTitle>
				<Button onClick={() => setOpen(false)}>Okay</Button>
			</div>
		)
	}

	const closeDialog = () => {
		setOpen(false)
	}

	return getReservations ? (
		<div>Loading</div>
	) : (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				selectable={true}
				editable={true}
				droppable={true}
				events={eventArr}
				displayEventTime={false}
				select={(info) => {
					setOpen(true)
					setSelectInfo({
						start: info.startStr,
						end: info.endStr,
						user: Auth.getUser(),
					})
				}}
			/>
			<Dialog id="calendarModal" open={open} onClose={closeDialog}>
				{openDialog()}
			</Dialog>
		</>
	)
}

export default OwnerCalendar
