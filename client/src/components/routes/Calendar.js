import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        droppable={true}
        //   events - query all events to display ie
        //   events={[
        //     { title: "event 1", date: "2022-11-01" },
        //     { title: "event 2", date: "2022-11-02" },
        //   ]}
        //   alert modal or form toggled with functionality based on user
        // if no account, message or alert  - create an account first
      />
    </>
  );
};

export default Calendar;
