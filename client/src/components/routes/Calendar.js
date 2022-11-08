import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useQuery } from '@apollo/client'
import { QUERY_EVENTS } from '../../utlis/queries'

const Calendar = () => {
	const { loading, data } = useQuery(QUERY_EVENTS)
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
	})

	const testEvents = [
		{
			_id: 'fakeId1',
			title: 'event 1',
			start: '2022-11-01',
			end: '2022-11-03',
			allDay: true,
		},
		{
			_id: 'fakeId1',
			title: 'event 2',
			start: '2022-11-05',
			end: '2022-11-08',
			allDay: true,
		},
	]

	console.log(eventArr)
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
				//   events - query all events to display ie
				//   events={[
				//     { title: "event 1", date: "2022-11-01" },
				//     { title: "event 2", date: "2022-11-02" },
				//   ]}
				//   alert modal or form toggled with functionality based on user
				// if no account, message or alert  - create an account first
			/>
		</>
	)
}

export default Calendar
