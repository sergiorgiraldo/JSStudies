import { useRouter} from "next/router";
import { getEventById } from "../../dummy-data"
import EventItem from "../../components/events/EventItem";

function EventDetailPage(){
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event){
        return <p>Event not found!</p>
    }

    return( 
    <div>
        <h1>Event Detail</h1>
        <EventItem 
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}/>        
    </div>
    );
}

export default EventDetailPage;