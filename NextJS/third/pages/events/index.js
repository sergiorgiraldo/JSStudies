import { getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter} from "next/router";

function AllEventsPage(){
    const events = getAllEvents();
    const router = useRouter();

    function eventSearchHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath);
    }

    return( 
    <div>
        <EventSearch onSearch={eventSearchHandler} />
        <EventList events={events}></EventList>
    </div>
    );
}

export default AllEventsPage;