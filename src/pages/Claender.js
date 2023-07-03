import { useState } from "react";
import { Calendar, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Headers from "../components/Header";
import { tokens } from "../theme";

function Calenders() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateset}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handelEventeClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m={"20px" }  mt={"0"}>
      <Headers title="Calender" subtitle="Full Calender Interative Page" />
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* Calender SIDBAR */}
        <Box
          flex="1 1 20%"
          borderColor={colors.primary[400]}
          p="15px"
          borderRadius={"4px"}
        >
          <Typography variant="h5">Event</Typography>
          <List>
            {currentEvent.map((e) => {
              return (
                <ListItem
                  key={e.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={e.title}
                    secondary={
                      <Typography>
                        {formatDate(e.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
        {/* Calender */}
        <Grid flex="1 1 100%" ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin,]}
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right:"dayGridMonth,timeGridweek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handelEventeClick}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-06-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2023-06-28",
              },
            ]}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Calenders;
