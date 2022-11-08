import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
// import addEvent from "../addEvent";

const Calendar = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const calendarRef = useRef(null);
  // const onEventAdded = (event) => {
  //   let calendarApi = calendarRef.current.getApi();
  //   calendarApi.addEvent(event);
  // };

  return (
    <>
      {/* <button>Add Event</button> */}
      {/* <addEvent></addEvent> */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        // initialView="dayGridMonth"
        selectable={true}
        editable={true}
        droppable={true}
        //Dayclick open sweetalert
        // dateClick={function(arg) {
        //   $("#myModal").modal("show");
        //   $(".modal-body").html("");
        //   $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
        // }}
        initialView="dayGridMonth"
            events={[
              { title: 'Hardcoded#1', date: '2022-11-01' },
              { title: 'Hardcoded #2', date: '2022-11-02' },
              // get route?
            ]}
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
