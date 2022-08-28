import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/EventList"

function HomePage(){

    const events = getFeaturedEvents();

    return( 
    <div>
        <h1>Featured events</h1>
        <EventList events={events}></EventList>
    </div>
    );
}

export default HomePage;