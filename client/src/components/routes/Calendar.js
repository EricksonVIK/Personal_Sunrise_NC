import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_RESERVATION, QUERY_EVENTS } from '../../utlis/queries'
import Auth from '../../utlis/auth'
import { Button, Dialog, DialogTitle } from '@mui/material'

const Calendar = () => {
	const [selectInfo, setSelectInfo] = useState({ start: '', end: '', user: '' })
	const [open, setOpen] = useState(false)
	const { loading, data } = useQuery(QUERY_EVENTS)
	const [loadingRes, { reservation }] = useMutation(ADD_RESERVATION)
	const eventArr = []
	const events = data?.events || []

	// Need this format for calendar.  end has to have that added to push it into the "last" day
	events.map((data, index) => {
		eventArr.push({
			id: data._id,
			title: data.title,
			start: new Date(parseInt(data.start)),
			end: new Date(parseInt(data.end) + 90000000),
			allDay: true,
		})
		return
	})

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
				select={(info) => {
					setOpen(true)
					setSelectInfo({
						start: info.startStr,
						end: info.endStr,
						user: Auth.getUser(),
					})
				}}
				//   events - query all events to display ie
				//   events={[
				//     { title: "event 1", date: "2022-11-01" },
				//     { title: "event 2", date: "2022-11-02" },
				//   ]}
				//   alert modal or form toggled with functionality based on user
				// if no account, message or alert  - create an account first
			/>
			<Dialog id="calendarModal" open={open} onClose={closeDialog}>
				{openDialog()}
			</Dialog>
		</>
	)
}

export default Calendar
