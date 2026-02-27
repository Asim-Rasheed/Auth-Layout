import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, isSameMonth, isToday } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { 'en-US': enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function CalendarScreen() {
  const [events, setEvents] = useState([
    { title: 'Team Meeting', start: new Date(2026, 1, 25, 10, 0), end: new Date(2026, 1, 25, 11, 0), color: '#7b2ff7' },
    { title: 'Project Deadline', start: new Date(2026, 1, 27, 9, 0), end: new Date(2026, 1, 27, 12, 0), color: '#ef4444' },
  ]);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ color: '#fff', marginBottom: 20 }}>Calendar</h2>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        selectable
        views={['month', 'week', 'day', 'agenda']}
        onSelectEvent={(event) => alert(`Event: ${event.title}`)}
        onSelectSlot={(slotInfo) => {
          const title = window.prompt('Enter event title');
          if (title) {
            setEvents([...events, { title, start: slotInfo.start, end: slotInfo.end, color: '#22c55e' }]);
          }
        }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            color: '#fff',
            borderRadius: 4,
            border: 'none',
          },
        })}
        dayPropGetter={(date) => ({
          style: {
            color: '#fff', // all dates white
            backgroundColor: !isSameMonth(date, new Date())
              ? '#1e293b' // dark for out-of-month blocks
              : isToday(date)
              ? '#100763' // subtle highlight for today
              : 'transparent',
          },
        })}
        slotPropGetter={() => ({
          style: { color: '#fff' }, // times in week/day white
        })}
      />

      <style>
        {`
          /* Toolbar buttons */
          .rbc-toolbar button {
            color: #fff !important;
          }
          .rbc-toolbar button[aria-pressed="true"] {
            background-color: #fff !important;
            color: #000 !important;
          }
          .rbc-toolbar button:hover {
            background-color: #4b5563 !important;
            color: #fff !important;
          }
          /* Toolbar label (Month/Year) */
          .rbc-toolbar .rbc-toolbar-label {
            color: #fff !important;
          }
          /* Day headers */
          .rbc-header {
            color: #fff !important;
          }
          /* Event text */
          .rbc-event {
            color: #fff !important;
          }
          /* Agenda view text */
          .rbc-agenda-view table,
          .rbc-agenda-view table th,
          .rbc-agenda-view table td {
            color: #fff !important;
            background-color: transparent !important;
          }
          /* Time labels in week/day view */
          .rbc-time-gutter .rbc-timeslot-label {
            color: #fff !important;
          }
          /* Month view cells (all dates white) */
          .rbc-month-row .rbc-date-cell {
            color: #fff !important;
          }
        `}
      </style>
    </div>
  );
}