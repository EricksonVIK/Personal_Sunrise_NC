import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useMutation, useQuery } from '@apollo/client'
import {
	ADD_EVENT,
	ADD_RESERVATION,
	QUERY_EVENTS,
	QUERY_RESERVATIONS,
} from '../../utlis/queries'
import Auth from '../../utlis/auth'
import { Button, Dialog, DialogTitle } from '@mui/material'

const OwnerCalendar = () => {
	const [selectInfo, setSelectInfo] = useState({
		start: '',
		end: '',
		username: '',
		email: '',
	})
	const [open, setOpen] = useState(false)
	const { loading, data } = useQuery(QUERY_RESERVATIONS)
	const [loadingRes, { savedEvent }] = useMutation(ADD_EVENT)
	const eventArr = []
	const events = data ? [...data.events, ...data.requests] : []

	// Need this format for calendar.  end has to have that added to push it into the "last" day

	console.log('events: ', eventArr)
	events.map((data, index) => {
		eventArr.push({
			id: data._id,
			title: data.title ? data.title : 'Reserved',
			email: data.email,
			username: data.username,
			start: new Date(parseInt(data.start)),
			end: new Date(parseInt(data.end)),
			allDay: true,
		})
	})

	// FullCalendar callback for when user selects dates
	const addEvents = async () => {
		try {
			const { event } = await loadingRes({
				variables: {
					username: selectInfo.username,
					email: selectInfo.email,
					start: selectInfo.start,
					end: selectInfo.end,
					title: 'Reserved Event',
					loginType: Auth.isOwner(),
				},
			})
			console.log(event)
		} catch (err) {
			console.error(err)
		}

		setOpen(false)
	}

	const openDialog = () => {
		return Auth.loggedIn() ? (
			<div id="dialogBox">
				<DialogTitle>Add reservation to event calendar?</DialogTitle>
				<p>{`Start: ${selectInfo.start} End: ${selectInfo.end}`}</p>

				<Button onClick={() => addEvents(selectInfo)}>Confirm</Button>
				<Button onClick={() => setOpen(false)}>Change</Button>
			</div>
		) : (
			<div id="dialogBox">
				<DialogTitle>Please log in to re-authorize.</DialogTitle>
				<Button onClick={() => setOpen(false)}>Okay</Button>
			</div>
		)
	}

	const closeDialog = () => {
		setOpen(false)
	}

	return loading ? (
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
				eventClick={(info) => {
					setSelectInfo({
						username: info.event._def.extendedProps.username,
						email: info.event._def.extendedProps.email,
						start: info.event._instance.range.start,
						end: info.event._instance.range.end,
					})
					console.log(Auth.isOwner()) //info.event._def)
					openDialog()
					setOpen(true)
				}}
			/>
			<Dialog id="calendarModal" open={open} onClose={closeDialog}>
				{openDialog()}
			</Dialog>
		</>
	)
}

export default OwnerCalendar
