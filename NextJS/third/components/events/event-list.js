import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          title={e.title}
          location={e.location}
          date={e.date}
          image={e.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
