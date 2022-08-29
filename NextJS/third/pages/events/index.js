import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function AllEventsPage(){
    const events = getAllEvents();

    return( 
    <div>
        <EventList events={events}></EventList>
    </div>
    );
}

export default AllEventsPage;